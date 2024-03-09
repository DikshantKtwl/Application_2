// In App.js in a new project

import * as React from 'react';
import { AuthProvider } from './context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNav from './navigation/AppNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
    <AppNav/>
    </AuthProvider>
   
  );
}
