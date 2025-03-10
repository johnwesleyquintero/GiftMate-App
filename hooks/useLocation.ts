import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

type LocationType = {
  latitude: number;
  longitude: number;
  error?: string;
};

export const useLocation = () => {
  const [location, setLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation(prev => ({ ...prev, error: 'Permission denied' }));
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
      } catch (error) {
        setLocation(prev => ({ ...prev, error: 'Unable to get location' }));
      }
    })();
  }, []);

  return location;
};