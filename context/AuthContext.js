import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../utils/config';


export const AuthContext = createContext();

export const AuthProvider = ({children})=> {
    const[isLoading, setIsLoading]= useState(false);
    const[userToken, setUserToken]= useState(null);
    const[userInfo, setUserInfo]= useState(null);
    // const[userType, setUserType]= useState(null);

    const register = (username, email, password, buttonType) => {
        setIsLoading(true);
        // username = username.charAt(0).toUpperCase() + username.slice(1);
        const usertype = buttonType;
    
        axios
          .post(`${BASE_URL}register/`, {
            username,
            email,
            password,
            usertype,
          })
          .then((res) => {
            let userInfo = res.data;
            
            setUserToken(userInfo.token);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setUserInfo(userInfo);
        
          })
          .catch((e) => {
            console.log(`Logging error ${e}`);
          })
          .finally(() => {
            setIsLoading(false); // Move setIsLoading(false) inside the .then block
          });
      };


    const login = (username, password)=>{
        setIsLoading(true);
        // username = username.charAt(0).toUpperCase() + username.slice(1);
        axios.post(`${BASE_URL}login/`,
        {
            username, password
        })
        .then(res =>{
            let userInfo = res.data;
            
            setUserToken(userInfo.token);
             AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            setUserInfo(userInfo);
          
        })
        .catch(e => {
            console.log(`logging error ${e}`);
            
          });
        // setUserToken('eqwdawwdwa');
        
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
      
        // Remove 'userInfo' from AsyncStorage
        AsyncStorage.removeItem('userInfo')
          .then(() => {
            // Once 'userInfo' is removed, update the state and perform other actions
            setUserInfo(null);
          })
          .catch((error) => {
            console.log('Error removing userInfo:', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
    const isLoggedIn=async ()=>{
        try{
            // let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            // let userType = await AsyncStorage.getItem('userType');
            userInfo =JSON.parse(userInfo);
            if(userInfo){
                // setUserToken(userToken);

                setUserInfo(userInfo);
            }
            
        setIsLoading(false);
        } catch(e){
            console.log(`isLogged in error ${e}`);
        }

    }
    useEffect(() => {
        isLoggedIn();
    }, []);
   
    return(
        <AuthContext.Provider value={{login,register, logout, isLoading, userToken,userInfo}}>
            {children}
        </AuthContext.Provider>
    )
}