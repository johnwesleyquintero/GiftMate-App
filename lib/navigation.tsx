import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '../config/theme';

export type RootStackParamList = {
  Home: undefined;
  Gifts: undefined;
  Reminders: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        theme={{
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.cardBackground,
            text: theme.colors.text,
            border: theme.colors.border,
            notification: theme.colors.secondary,
          },
          dark: theme.dark
        }}
      >
        <Drawer.Navigator
          screenOptions={{
            gestureEnabled: true,
            swipeEnabled: true,
            headerTintColor: theme.colors.text,
            headerStyle: {
              backgroundColor: theme.colors.cardBackground
            },
            drawerStyle: {
              backgroundColor: theme.colors.cardBackground
            },
            drawerActiveTintColor: theme.colors.primary
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} accessibilityLabel="Home screen" />
          <Drawer.Screen name="Gifts" component={GiftsScreen} accessibilityLabel="Gift management screen" />
          <Drawer.Screen name="Reminders" component={RemindersScreen} accessibilityLabel="Reminder notifications screen" />
          <Drawer.Screen name="Settings" component={SettingsScreen} accessibilityLabel="Application settings screen" />
        </Drawer.Navigator>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            transitionSpec: {
              open: {
                animation: 'timing',
                config: { duration: 300 }
              },
              close: {
                animation: 'timing',
                config: { duration: 300 }
              }
            },
            cardStyleInterpolator: ({ current, layouts }) => ({
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0]
                    })
                  }
                ]
              }
            })
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} accessibilityLabel="Home screen" />
          <Drawer.Screen name="Gifts" component={GiftsScreen} accessibilityLabel="Gift management screen" />
          <Drawer.Screen name="Reminders" component={RemindersScreen} accessibilityLabel="Reminder notifications screen" />
          <Drawer.Screen name="Settings" component={SettingsScreen} accessibilityLabel="Application settings screen" />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};