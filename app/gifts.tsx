import { FlatList } from 'react-native';
import { GiftCard } from '../components/GiftCard';
import { useLocalPartners } from '../hooks/useLocalPartners';
import { useLocation } from '../hooks/useLocation';

export default function GiftsScreen() {
  const location = useLocation();
  const { partners, loading } = useLocalPartners();

  return (
    <FlatList
      data={partners}
      renderItem={({ item }) => (
        <GiftCard
          title={item.name}
          description={item.description}
          price={0}
          imageUrl={item.imageUrl}
          location={item.location}
          currentLocation={location}
          partnerType={item.partner_type}
          verified={item.verified}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}