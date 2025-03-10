import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLocation } from './useLocation';

type LocalPartner = {
  id: string;
  name: string;
  description?: string;
  location: { latitude: number; longitude: number };
  partner_type: 'restaurant' | 'experience' | 'retail';
  verified: boolean;
  distance?: number;
};

export const useLocalPartners = (radiusMiles = 10) => {
  const [partners, setPartners] = useState<LocalPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!location.latitude || !location.longitude) return;

    const fetchPartners = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .rpc('nearby_partners', {
            lat: location.latitude,
            lon: location.longitude,
            radius: radiusMiles
          });

        if (error) throw error;

        setPartners(data.map((partner: any) => ({
          ...partner,
          location: {
            latitude: partner.location.coordinates[1],
            longitude: partner.location.coordinates[0]
          },
          distance: partner.distance
        })));
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();

    // Set up real-time subscription
    const channel = supabase
      .channel('public:LocalPartners')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'LocalPartners'
      }, () => fetchPartners())
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [location.latitude, location.longitude, radiusMiles]);

  return { partners, loading };
};