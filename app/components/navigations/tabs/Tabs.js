import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Colors';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            tabBarInactiveTintColor: Colors.grey,
            tabBarActiveTintColor: Colors.purple,
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: Colors.background },
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{ tabBarLabel: 'Home' }}
         />
      </Tab.Navigator>
   );
}
