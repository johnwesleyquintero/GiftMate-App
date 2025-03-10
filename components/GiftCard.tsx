import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { useTrackActivity } from '../hooks/useTrackActivity';

interface GiftCardProps {
  title: string;
  description?: string;
  price: number;
  imageUrl: string;
  giftId: string;
  location?: { latitude: number; longitude: number };
  currentLocation?: { latitude: number; longitude: number };
  partnerType?: 'restaurant' | 'experience' | 'retail';
  verified?: boolean;
  onPress?: () => void;
  isSelected?: boolean;
  icon?: LucideIcon;
}

/**
 * GiftCard Component - Displays gift information in a card layout
 * @param {string} title - Gift title (required)
 * @param {string} description - Short gift description
 * @param {number} price - Display price with currency formatting
 * @param {string} imageUrl - Image URL or local resource
 * @param {function} onPress - Click handler for card interaction
 * @param {boolean} isSelected - Visual selection state
 * @param {LucideIcon} icon - Optional icon from Lucide library
 */
export const GiftCard = React.memo(({
  title,
  description,
  price,
  imageUrl,
  giftId,
  onPress,
  isSelected = false,
  icon: Icon,
}: GiftCardProps) => {
  const { trackActivity } = useTrackActivity();

  const handlePress = useCallback(() => {
    HapticFeedback.trigger('impactMedium');
    trackActivity(giftId, 'view');
    onPress?.();
  }, [giftId, onPress, trackActivity]);

  const handleSave = useCallback(() => {
    HapticFeedback.trigger('notificationSuccess');
    trackActivity(giftId, 'save');
  }, [giftId, trackActivity]);

  const handlePurchase = () => {
    trackActivity(giftId, 'purchase');
    handlePurchase;
  };
  return (
    <TouchableOpacity
      onPress={handleSave}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Image
        source={{ 
          uri: imageUrl,
          cache: 'force-cache'
        }}
        style={styles.image}
        accessibilityLabel={title}
        accessibilityRole="image"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        
        {description && (
          <Text style={styles.description}>{description}</Text>
        )}

        <View style={styles.priceRow}>
          {Icon && <Icon size={16} color="#666" />}
          <Text style={styles.price}>
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.radii.lg,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    shadowColor: theme.colors.border,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  price: {
    ...theme.typography.body,
    color: theme.colors.primary,
  },
  image: {
    borderRadius: theme.radii.md,
    marginRight: theme.spacing.md,
  },
  selectedContainer: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.surface,
  },
  title: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  description: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.subtext,
    marginBottom: theme.spacing.sm,
  },
  price: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '700',
    color: theme.colors.primary,
  },
});

// Update JSX:
<TouchableOpacity 
  accessible={true}
  accessibilityLabel={`${title} card, price ${price}`}
  accessibilityRole="button"
  onPress={handlePress}
>...</TouchableOpacity>
<TouchableOpacity onPress={handlePurchase}>...</TouchableOpacity>
<TouchableOpacity 
  onPress={handleSave}
  accessibilityLabel="Save gift"
  accessibilityHint="Saves this gift to your favorites"
>...</TouchableOpacity>