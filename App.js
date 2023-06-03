import { StatusBar } from 'expo-status-bar';
import {  NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/stack/AppStack';
import  Header  from './src/components/layout/Header';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <AppStack />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
