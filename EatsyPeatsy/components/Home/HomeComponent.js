import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeComponent = ({ user, onLogout }) => {

  if (!user || !user.username) {
    return <Text>Please log in</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user.username}!</Text>
      <TouchableOpacity style={styles.button} onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeComponent;
