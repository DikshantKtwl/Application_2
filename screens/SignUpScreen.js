import React, { useState, useLayoutEffect, useContext } from 'react';
import { Button, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import Tts from 'react-native-tts';
const SignUpScreen = ({ route, navigation }) => {
    const { buttonType } = route.params;
    const [email, SetEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });


    }, []);
    const { register } = useContext(AuthContext);
    const handleLoginScreen = async(buttonType)=>{
        
        
        if (buttonType === 'Blind') { // Corrected the syntax here
            try {
                // Set the speech rate to a slower value (e.g., 0.5 for half the normal speed)
                await Tts.setDefaultRate(0.4);
                await Tts.speak('Already have an account?');
              } catch (error) {
                console.error("TTS Error:", error);
              } finally {
                // Reset the speech rate to the default after speaking
                await Tts.setDefaultRate(0.5); // Set it back to 1.0 for normal speed
              }
            }

        navigation.navigate('LoginScreen', { buttonType });
        
      };
      const handleSignUp = async (buttonType) => {
       
        if (password !== repassword) {
          // Show an error message or handle the error as needed
          console.log("Passwords do not match");
          return;
        }
        if (buttonType === 'Blind') { // Corrected the syntax here
              Tts.speak('Sign Up');
            }
      
        // Continue with the registration process if passwords match
        register(username, email, password, buttonType);
        
      };
    

    return (
        <SafeAreaView  >
            <View className="items-center">
                <Text className="font-bold text-black text-5xl pt-6">Vision</Text>
                
                <Image className="h-20 w-40" source={require(".././assets/eye1.png")} />
                

            </View>
            <View className="pt-6 mt-9 items-center">
            <Text className="font-bold text-black text-xl mb-5 te">SIGN UP</Text>
                <TextInput style={styles.inputView} className=" text-center "
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={(email) => SetEmail(email)}
                />
                <TextInput style={styles.inputView} className=" text-center "
                    placeholder='Username'
                    keyboardType="default"
                    onChangeText={(username) => setUsername(username)}
                />
                <TextInput style={styles.inputView} className=" text-center "
                    placeholder='Password'
                    secureTextEntry={true}
                    keyboardType="default"
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput style={styles.inputView} className=" text-center "
                    placeholder='Re-Password'
                    secureTextEntry={true}
                    keyboardType="default"
                    onChangeText={(repassword) => setRepassword(repassword)}
                />
            </View>
            <View className="items-center ">
                <Text onPress={() => handleLoginScreen(buttonType)}>
                    Already have an account?
                </Text>
            <TouchableOpacity onPress={() => handleSignUp(buttonType)}
            style={styles.loginBtn}>
                <Text className="text-xl">SIGNUP</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
};
const styles = StyleSheet.create({
  
    inputView: {
        backgroundColor: "#558dc3",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
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
  }
  )



export default SignUpScreen;