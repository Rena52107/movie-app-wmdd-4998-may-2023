import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieScreen from '../screens/MovieScreen';
import SearchScreen from '../screens/SearchScreen';
import TvScreen from '../screens/TvScreen';
import { Colors } from '../constants/styles';

const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'none' },
        tabBarActiveTintColor: Colors.primary100,
        tabBarIndicatorStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Tab.Screen
        name='Movies'
        component={MovieScreen}
      />
      <Tab.Screen
        name='Search Results'
        component={SearchScreen}
      />
      <Tab.Screen
        name='TV Shows'
        component={TvScreen}
      />
    </Tab.Navigator>
  );
}

export default TabStack;
