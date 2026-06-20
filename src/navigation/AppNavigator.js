import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import PetProfileScreen from '../screens/PetProfileScreen';
import SittersScreen from '../screens/SittersScreen';
import SitterDetailScreen from '../screens/SitterDetailScreen';
import BookingScreen from '../screens/BookingScreen';
import ReservationsScreen from '../screens/ReservationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import { colors, typography } from '../theme';

const Stack =
  Platform.OS === 'web'
    ? createStackNavigator()
    : createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: colors.background },
  headerTintColor: colors.text,
  headerTitleStyle: { ...typography.bodyMedium },
  contentStyle: { backgroundColor: colors.background },
};

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Sitters"
        component={SittersScreen}
        options={{ title: 'Buscar cuidadores' }}
      />
      <Stack.Screen
        name="SitterDetail"
        component={SitterDetailScreen}
        options={{ title: 'Perfil del cuidador' }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{ title: 'Reservar' }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { ...typography.bodyMedium },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          height: Platform.OS === 'web' ? 64 : 60,
          paddingBottom: Platform.OS === 'web' ? 8 : 4,
        },
        tabBarLabelStyle: { ...typography.caption, fontSize: 11 },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Inicio: 'home-outline',
            Buscar: 'search-outline',
            Reservas: 'calendar-outline',
            Chat: 'chatbubble-outline',
            Perfil: 'person-outline',
          };
          return (
            <Ionicons name={icons[route.name]} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchStack}
        options={{ headerShown: false, title: 'Buscar' }}
      />
      <Tab.Screen
        name="Reservas"
        component={ReservationsScreen}
        options={{ title: 'Mis reservas' }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: 'Chat' }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ title: 'Mi perfil' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Iniciar sesión' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registrarse' }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PetProfile"
          component={PetProfileScreen}
          options={{ title: 'Mis mascotas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
