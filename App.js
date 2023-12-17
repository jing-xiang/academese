// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();

// ... (previous imports)

const App = () => {
  const [user, setUser] = useState(null);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    checkOnboardingStatus();
    checkAuthentication();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const onboardingStatus = await AsyncStorage.getItem('onboardingStatus');
      setIsOnboardingComplete(Boolean(onboardingStatus));
    } catch (error) {
      console.error('Error checking onboarding status:', error);
    }
  };

  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setUser({ token: userToken });
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };

  const onOnboardingComplete = async () => {
    await AsyncStorage.setItem('onboardingStatus', 'complete');
    setIsOnboardingComplete(true);
  };

  const onLogin = (userToken) => {
    setUser({ token: userToken });
    AsyncStorage.setItem('userToken', userToken);
  };

  const onLogout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('userToken');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={isOnboardingComplete ? (user ? 'Home' : 'Auth') : 'Onboarding'}
      >
        <Stack.Screen name="Onboarding">
          {(props) => <OnboardingScreen {...props} onOnboardingComplete={onOnboardingComplete} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} onLogout={onLogout} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Auth">
          {(props) => <AuthScreen {...props} onLogin={onLogin} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
