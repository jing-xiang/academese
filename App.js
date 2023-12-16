// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated (using AsyncStorage or other authentication mechanisms)
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        // Set the user if the token is present
        setUser({ token: userToken });
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };

  const onLogin = (userToken) => {
    setUser({ token: userToken });
    // Save the user token to AsyncStorage or your authentication mechanism
    AsyncStorage.setItem('userToken', userToken);
  };

  const onLogout = async () => {
    // Clear user data from state and AsyncStorage
    setUser(null);
    await AsyncStorage.removeItem('userToken');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'Home' : 'Auth'}
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <>
            <Stack.Screen name="Home" options={{ title: 'Home' }}>
              {(props) => <HomeScreen {...props} onLogout={onLogout} />}
            </Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Schedule" component={ScheduleScreen} />
          </>
        ) : (
          <Stack.Screen name="Auth">
            {(props) => <AuthScreen {...props} onLogin={onLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
