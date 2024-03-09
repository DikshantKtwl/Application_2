import React, { useContext }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import HomeScreen from '../screens/HomeScreen';
// import JoinScreen from '../screens/JoinScreen';
import HomeScreenVolunteer from '../screens/HomeScreenVolunteer';



const Stack = createNativeStackNavigator();
const MainNav = () => {
const { userInfo } = useContext(AuthContext);

console.log(userInfo)
  return (
    
        <Stack.Navigator>
        
        {userInfo.usertype === "Blind" ? (
           <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          {/* <Stack.Screen name="JoinScreen" component={JoinScreen}/> */}
          </>
          ) : (
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            // <Stack.Screen name="JoinScreen" component={JoinScreen}/>
         
           
               )}
        </Stack.Navigator>

   
  )
}

export default MainNav