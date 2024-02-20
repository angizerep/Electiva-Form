import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigate';
import { Provider } from "react-redux"
import store from "./src/context/store"

// import * as React from 'react';

// export const navigationRef = React.createRef();

// export function navigate( name, params ) {
//   navigationRef.current?.navigate( name, params );
// }


export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation/>
      </Provider>
      <StatusBar
      backgroundColor='#6733E2'
      style="light"
      />
    </SafeAreaProvider>
  );
}
