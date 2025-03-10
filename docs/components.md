# Component Documentation Guide

## RemindersScreen Component
**Location**: app/(tabs)/reminders.tsx

**Props**:
- `navigation`: React Navigation prop
- `route`: React Navigation route object

**State Management**:
- Toggles reminder preferences using useState
- Manages notification settings with contextual switches

**Key Features**:
```tsx
// Example usage in parent component
<RemindersScreen 
  navigation={navigation}
  route={route}
/>

// Switch implementation example
<Switch
  value={notifications.dayOf}
  onValueChange={() => toggleSwitch('dayOf')}
  trackColor={{ false: '#D1D1D6', true: '#34C759' }}
/>
```

## NotificationToggle Component
**Reusable Switch Component**:
```tsx
interface NotificationToggleProps {
  label: string;
  value: boolean;
  onToggle: () => void;
}

const NotificationToggle = ({ label, value, onToggle }: NotificationToggleProps) => (
  <View style={styles.option}>
    <Text style={styles.optionText}>{label}</Text>
    <Switch
      value={value}
      onValueChange={onToggle}
      trackColor={{ false: '#D1D1D6', true: '#34C759' }}
    />
  </View>
);
```

## Documentation Standards
1. All components must include:
   - PropType definitions
   - State management description
   - Usage examples
2. Complex components require:
   - Flow diagram
   - Interaction guidelines
   - Accessibility requirements