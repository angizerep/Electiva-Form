import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/login/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as React from 'react';

// export const navigationRef = React.createRef();

// export function navigate( name, params ) {
//   navigationRef.current?.navigate( name, params );
// }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" mode="modal" headerMode="none">
          <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar
      backgroundColor='#6733E2'
      style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
