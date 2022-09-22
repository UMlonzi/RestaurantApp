import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Browse from '../screens/Browse';
 import Reservation from '../screens/Reservation';
 import Profile from '../screens/Profile';

import {Entypo } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer >
       
    <Tab.Navigator

    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Browse') {
            iconName = focused ? 'magnifying-glass' : 'magnifying-glass';
          }else if (route.name === 'Bookings') {
            iconName = focused ? 'book' : 'book';
          }else if (route.name === 'Reservation') {
            iconName = focused ? 'calendar' : 'calandar-outlined';
          } 
      
          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
         
        },
        tabBarActiveTintColor: '#8C7C34',
        tabBarInactiveTintColor: '#29281D',
        tabBarStyle: {backgroundColor: '#E5DDDB'},
        headerShown: false
        
      })}
      
    >
      <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Reservation" component={Reservation} />
      <Tab.Screen name="Profile" component={Profile} />
   
    </Tab.Navigator>
  </NavigationContainer>

  
  );
}