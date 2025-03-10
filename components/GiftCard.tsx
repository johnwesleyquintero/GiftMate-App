import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface GiftCardProps {
  title: string;
  description?: string;
  price: number;
  imageUrl: string;
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
export const GiftCard = ({
  title,
  description,
  price,
  imageUrl,
  onPress,
  isSelected = false,
  icon: Icon,
}: GiftCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        accessibilityLabel={title}
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
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedContainer: {
    borderWidth: 2,
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#1F2937',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3B82F6',
  },
});