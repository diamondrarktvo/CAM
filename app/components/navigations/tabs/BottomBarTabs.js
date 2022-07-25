import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../../theme/Colors';
import { Icon } from '@rneui/themed';

//import screen bottom tab
import Home from '../../../pages/home/Home';
import Profil from '../../../pages/profil/Profil';
import Search from '../../../pages/search/Search';

const Tab = createBottomTabNavigator();

export default function BottomBarTabs() {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: Colors.black,
            tabBarActiveTintColor: Colors.purple,
            tabBarLabelStyle: { fontSize: 13, textTransform: 'capitalize' },
            tabBarStyle: styles.tabBarStyles,
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'home'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Search"
            component={Search}
            options={{
               tabBarLabel: 'Search',
               tabBarIcon: ({ color, size }) => (
                  <Icon name={'search'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Profil"
            component={Profil}
            options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({ color, size }) => (
                  <Icon name={'person'} color={color} size={size} />
               ),
            }}
         />
      </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
   tabBarStyles: {
      position: 'absolute',
      borderRadius: 30,
      margin: 10,
      backgroundColor: Colors.background,
      height: 60,
      padding: 5,
   },
});
