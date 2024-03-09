import React, { useState, useLayoutEffect, useContext } from 'react';
import { Button, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Tts from 'react-native-tts';
const LoginScreen = ({route, navigation }) => {
  const { buttonType } = route.params;
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });


  }, []);


  const handleSignUpScreen = async(buttonType)=>{
    if (buttonType === 'Blind') { // Corrected the syntax here
    
       Tts.speak('Create a new account??');}
     
  
    navigation.navigate('SignUpScreen', { buttonType });
  };


  return (
    <SafeAreaView className="flex-1">
    <View style={styles.container}>
      
      <Text className="font-bold text-black text-5xl pb-6"> Vision</Text>
      <Image style={styles.image} source={require(".././assets/eye1.png")} />
      <View style={styles.inputView}>
       
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setUsername(email)} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)} />
      </View>
      <TouchableOpacity >
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSignUpScreen(buttonType)} >
        <Text style={styles.createanew}>Create a new account?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        if(buttonType === 'Blind'){
          Tts.speak("LOG IN")
        }
        
        login(username, password, buttonType)}}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    width: 100,
    height: 50

  },
  inputView: {
    backgroundColor: "#558dc3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 3,
  },
  loginBtn:
  {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#27598d",
  },
  createanew: {
    height: 30,
    marginBottom: 10,

  }



})


export default LoginScreen;