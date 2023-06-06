import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import AppStack from './src/stack/AppStack';
import RecordDetail from './src/screens/RecordDetail';
import { Colors } from './src/constants/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Movies App'
            component={AppStack}
            options={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: Colors.primary100 },
            }}
          />
          <Stack.Screen
            name='Detail'
            component={RecordDetail}
            options={({ navigation, route }) => ({
              headerLeft: () => (
                <HeaderBackButton
                  onPress={() => navigation.goBack()}
                  label='Back to List'
                  labelVisible={true}
                />
              ),
              title: route.params.title,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </NativeBaseProvider>
  );
}
