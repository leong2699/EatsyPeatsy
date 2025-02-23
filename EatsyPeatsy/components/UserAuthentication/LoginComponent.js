import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import EatsyPeatsyLogo from '../../assets/EatsyPeatsyLogo.png';
import { useNavigation } from '@react-navigation/native';


const LoginComponent = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleCreate = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={EatsyPeatsyLogo} style={styles.logo} resizeMode="contain" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 20,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 30,
    },
    logo: {
      width: 306,
      height: 306,
    },
    tagline: {
      fontSize: 12,
      color: '#888',
      marginTop: 5,
      textAlign: 'center',
    },
    input: {
      height: 45,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 15,
      borderRadius: 5,
      color: '#333',
      fontSize: 16,
    },
    signInButton: {
      backgroundColor: '#333',
      paddingVertical: 12,
      borderRadius: 5,
      alignItems: 'center',
    },
    createAccountButton: {
        backgroundColor: '#333',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10
      },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    }
  });
  
  export default LoginComponent;