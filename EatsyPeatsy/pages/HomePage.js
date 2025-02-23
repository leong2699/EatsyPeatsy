import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '../services/AuthService';
import HomeComponent from '../components/Home/HomeComponent';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <HomeComponent user={user} onLogout={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
