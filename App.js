import LoginScreen from './src/screens/LoginScreen';
import { StyleSheet,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './src/screens/HomeScreen';



 const Stack = createNativeStackNavigator();
const MyStack = () => 
 {
  return (
  
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Sign In' }}
      />
      <Stack.Screen name="Home" component={HomeScreen}
      options={{ title: 'Home Screen' }} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default MyStack
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
