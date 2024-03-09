import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
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




const HomeScreen = () => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  const {userToken}= useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });


  }, []);

  const handleJoinScreen = async(userInfo) => {
    // Navigate to the camera screen
    navigation.navigate('JoinScreen', { userInfo }); // Replace 'CameraScreen' with the actual name of your camera screen
  };
  


  return (
    
   
      <SafeAreaView className='bg-black-100 pt-5 flex-1 '>
        <View className='flex-row pb-3 items-center px-4 space-x-2'>
        
          <View className="flex-1">
            <Text className="font-bold text-black-400 text-xl">
            Hello, 
            {userInfo.username.charAt(0).toUpperCase() + userInfo.username.slice(1)}
            
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {logout()}}>
              <ArrowLeftStartOnRectangleIcon size={35} color='#00CCBB' style={{transform: [{rotateY: '180deg'}]}}   />
            </TouchableOpacity>
          </View>
        </View>
        <View className="pt-1 ">
        <View className="items-center pt-10 bg-sky-500 h-3/4 w-full ">
        <TouchableOpacity onPress={() => handleJoinScreen(userInfo)} className="relative w-72 h-5/6 rounded-xl bg-white items-center justify-center shadow-md">
          <Text className="font-bold text-black text-5xl pb-6 "> Vision</Text>
          <Image className='absolute top-10 h-12 w-24 ' source={require(".././assets/eye1.png")} />
          <Text className=""> Press here for assistance</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => {
        login(username, password, buttonType)}}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}
        </View>
        <View className="items-center  bg-sky-400  ">
        <TouchableOpacity className="relative  w-3/4 h-20 rounded-xl bg-white justify-center items-center shadow-md">
          <Text className="font-normal text-xl "> Object Recognition </Text>
        </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>

    // <SafeAreaView className='bg-white pt-5'>
    //   <View className='flex-row pb-3 items-center mx-4 space-x-2'>
    //     <Image
    //     source={{ uri: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
    //     }}
    //     className='h-7 w-7 bg-grey-300 p-4 rounded-full'
    //     />
    //   <View className="flex-1">
    //     <Text className="font-bold text-gray-400 text-xs">
    //     Deliver Now
    //     </Text>
    //     <Text className="font-bold text-xl">
    //     Current Location
    //     <ChevronDownIcon size={20} color="#00CCBB" />
    //     </Text>
    //   </View>
    //   <View>
    //   <TouchableOpacity onPress={handleUserIconPress}>
    //     <UserIcon size={35} color='#00CCBB' />
    //   </TouchableOpacity>
    // </View>
    //   </View>
    //   {/* Serach */}
    //   <View className='flex-row items-center space-x-2 mx-4 p-1'>
    //     <View className="flex-row flex-1 space-x-2 rounded-sm bg-gray-200 p-2">
    //       <MagnifyingGlassIcon color="gray" />
    //       <TextInput
    //       placeholder='Search Here!'
    //       keyboardType="default"
    //       />
    //     </View>
    //     <AdjustmentsVerticalIcon color='#00CCBB' />

    //   </View>
    //   {/* BODY */}
    //     <ScrollView
    //     className='bg-gray-100'
    //     contentContainerStyle={{
    //       paddingBottom:100,
    //     }}
    //     >
    //       {/* Categories */}
    //     <Categories />
    //     </ScrollView>
    //   </SafeAreaView>
  );
};

export default HomeScreen;
