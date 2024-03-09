import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBooarding from '../screens/OnBooarding';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';




const Stack = createNativeStackNavigator();
const AuthStack = () => {
 
  return (
   
     
        <Stack.Navigator>
          <Stack.Screen name='OnBoarding' component={OnBooarding}/>
          
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />

          {/* <Stack.Screen name="CameraFunction" component={CameraFunction}/> Screen for camera module for FYP */}
        </Stack.Navigator>

    
    
  )
}

export default AuthStack