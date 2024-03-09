import { View, Text, SafeAreaView,ActivityIndicator, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext,useState,useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ArrowLeftStartOnRectangleIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import { AuthContext } from '../context/AuthContext';




const HomeScreenVolunteer = () => {
  const { userInfo,logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
 
 
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });


  }, []);
  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoading(false); // After the operation is complete, set loading to false
    }, 2000); // Simulating a 2-second delay, replace with your actual data fetching logic
  }, []);


  return (<SafeAreaView  className='flex-1 '>
    <View className='flex-row pb-3 items-center px-4 space-x-2'>
          
          <View className="flex-1">
            <Text className="font-bold text-black-400 text-xl">
            Hello, {userInfo.username.charAt(0).toUpperCase() + userInfo.username.slice(1)}
            
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {logout()}}>
              <ArrowLeftStartOnRectangleIcon size={35} color='#00CCBB' style={{transform: [{rotateY: '180deg'}]}}   />
            </TouchableOpacity>
          </View>
        </View>




   
    </SafeAreaView>
  )
}

export default HomeScreenVolunteer