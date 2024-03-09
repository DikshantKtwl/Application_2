import React, { useState,useEffect, useLayoutEffect, useContext } from 'react';
import { Button, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Tts from 'react-native-tts';
const OnBoarding = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });


  }, []);


  const handleSignUpScreen = async (buttonType) => {
    if (buttonType === 'Blind') { // Corrected the syntax here
      try {
        await Tts.speak('Hello');
      } catch (error) {
        console.error("TTS Error:", error);
      }
    }
  
    navigation.navigate('SignUpScreen', { buttonType });
  };
  
  return (
    <SafeAreaView className="flex-1" >
    <View className="flex-1 bg-gradient-to-r from-blue-500  ">

    <View className="items-center pt-5  border-b border-solid border-gray-300 ">
        <Text className="font-bold text-black text-5xl ">
            Vision
        </Text>
    </View>
    <View className=" flex-1 items-center justify-center   ">
        <TouchableOpacity style={styles.loginBtn} className="bg-white w-80 rounded-lg h-64 mb-5 items-center justify-center"
        onPress={() => handleSignUpScreen('Volunteer')}
        >
            <Text className="font-bold text-blue-300 text-5xl "> Volunteer
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} className="bg-white w-80 rounded-lg h-64 mt-5 items-center justify-center"
       onPress={() => handleSignUpScreen('Blind')}
        >
        <Text className="font-bold text-blue-300 text-5xl "> Blind
            </Text>
        </TouchableOpacity>
    
    </View>  
    </View> 
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
 
  loginBtn:
  {
    backgroundColor: "#00008B",
  },
  createanew: {
    height: 30,
    marginBottom: 10,

  }



})


export default OnBoarding;