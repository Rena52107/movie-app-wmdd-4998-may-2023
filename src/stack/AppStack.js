import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import RecordDetail from '../screens/RecordDetail';
import { Colors } from '../constants/styles';
import TabStack from './NabStack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Movies App'
          component={TabStack}
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
  );
};

export default AppStack;
