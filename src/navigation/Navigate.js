import {NavigationContainer} from '@react-navigation/native';
import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider,} from 'react-native-paper';
import LoginScreen from './../screens/login/login.js';
import SignInScreen from '../screens/signIn/signIn.js';
import RecoverPasswordScreen from '../screens/recoverPassword/recoverPassword.js';

export default function Navigation() {
  return (
    <PaperProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </PaperProvider>
  );
}
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
      <Stack.Navigator initialRouteName='login' mode="modal" headerMode="none">
          <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
          <Stack.Screen name="signIn" component={SignInScreen} options={{headerShown:false}} />
          <Stack.Screen name="recoverPassword" component={RecoverPasswordScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  );
}