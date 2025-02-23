import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './services/AuthService';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e', // Customize the header background color
            },
            headerTintColor: '#fff', // Customize the header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Customize the header title style
            },
            headerLeft: () => null,
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{ headerShown: false }} // Hide header for Login screen
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterPage} 
            options={{ headerShown: false }} // Hide header for Login screen
          />
          <Stack.Screen 
            name="Home" 
            component={HomePage} 
            options={{ title: 'Home' }} // Custom title for Home screen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
