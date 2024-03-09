// AppNav.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import MainNav from './MainNav';

const AppNav = () => {
  const { isLoading, userInfo } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
       
    );
  }
  return (
    <NavigationContainer>
      
      {userInfo !== null ? <MainNav/> : <AuthStack/>}
     
    </NavigationContainer>
  );
};

export default AppNav;