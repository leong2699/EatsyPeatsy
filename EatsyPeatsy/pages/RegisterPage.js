import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '../services/AuthService';
import RegisterComponent from '../components/UserAuthentication/RegisterComponent';
import { useNavigation } from '@react-navigation/native';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigation = useNavigation();

  const handleRegister = async (username, email, password) => {
    try {
      await register(username, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Registration failed:', error);
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <RegisterComponent onRegister={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterPage;
