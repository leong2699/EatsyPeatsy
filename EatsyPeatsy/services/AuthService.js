import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = 'http://localhost:5000'; // Backend URL

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored token on app start
    checkToken();
  }, []);

  const register = async (username, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, { username, email, password });
      const { token, user } = response.data;
      await AsyncStorage.setItem('token', token);
      setUser(user);
      return user;
    } catch (error) {
      console.error('Registration error:', error);
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  };

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      try {
        const response = await axios.get(`${API_URL}/api/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Error verifying token:', error);
      }
    }
    setLoading(false);
  };

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
      const { token, user } = response.data;
      await AsyncStorage.setItem('token', token);
      setAuthToken(token);
      setUser(user);
    } catch (error) {
      console.error('Login error:', error);
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
