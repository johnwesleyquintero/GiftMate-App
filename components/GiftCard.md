# GiftCard Component

## Purpose

Displays gift items in a consistent card format with image, title, and description.

## Props

- `gift`: Gift object containing:
  - `id`: Unique identifier
  - `name`: Display name
  - `description`: Short description
  - `imageUrl`: Cloud storage path
- `onPress`: Callback function for card interaction
- `style`: Custom styling props

## Usage Example

```tsx
import { GiftCard } from '../components/GiftCard';

export const GiftList = ({ gifts }) => (
  <FlatList
    data={gifts}
    renderItem={({ item }) => (
      <GiftCard
        gift={item}
        onPress={() => navigation.navigate('GiftDetail', { giftId: item.id })}
      />
    )}
  />
);
```

## Best Practices

1. Use memoization for lists
2. Preload images using expo-image
3. Maintain aspect ratio of 3:2 for images
4. Add loading skeletons
5. Implement error handling for broken images

## Accessibility Features

- Screen reader labels
- Proper contrast ratios
- Zoom compatibility
- Keyboard navigation support
