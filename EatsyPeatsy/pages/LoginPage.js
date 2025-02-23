import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../services/AuthService';
import LoginComponent from '../components/UserAuthentication/LoginComponent';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const { login } = useAuth();
  const navigation = useNavigation();

  const handleLogin = async (username, password) => {
    try {
      await login(username, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login failed:', error);
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <LoginComponent onLogin={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerLink: {
    color: '#007AFF',
    marginTop: 15,
  },
});

export default LoginPage;
