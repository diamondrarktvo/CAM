import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../theme/Colors';
//importation des vues pour le top navigation
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Movie from '../viewForTopTabsNavigation/Movie';
import Anime from '../viewForTopTabsNavigation/Anime';
import Kids from '../viewForTopTabsNavigation/Kids';
import Serie from '../viewForTopTabsNavigation/Serie';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
   const insets = useSafeAreaInsets(); //pour regler avec les zones de sécurité
   return (
      <Tab.Navigator
         initialRouteName="Movie"
         screenOptions={{
            tabBarInactiveTintColor: Colors.black,
            tabBarActiveTintColor: Colors.purple,
            tabBarLabelStyle: { fontSize: 14, textTransform: 'capitalize' },
            tabBarStyle: {
               backgroundColor: Colors.background,
            },
         }}
      >
         <Tab.Screen
            name="Movie"
            component={Movie}
            options={{ tabBarLabel: 'Film' }}
         />
         <Tab.Screen
            name="Anime"
            component={Anime}
            options={{ tabBarLabel: 'Animé' }}
         />
         <Tab.Screen
            name="Kids"
            component={Kids}
            options={{ tabBarLabel: 'Enfant' }}
         />
         <Tab.Screen
            name="Serie"
            component={Serie}
            options={{ tabBarLabel: 'Série' }}
         />
      </Tab.Navigator>
   );
}
