import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import AppStack from './src/stack/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style='auto' />
      <AppStack />
    </NativeBaseProvider>
  );
}
