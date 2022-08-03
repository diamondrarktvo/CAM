import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//name util for stack navigation
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
/*tab Navitation (top and bottom both)*/
import BottomBarTabs from '_components/navigations/tabs/BottomBarTabs';
/*screen normal |screen indépendant à afficher|*/
//from reusable
import ListingPage from '_components/reusable/listingPage/ListingPage';

let Stack = createStackNavigator();
export default function StackNavigation() {
   return (
      <Stack.Navigator
         initialRouteName={nameNav.home}
         screenOptions={{ headerShown: true }}
      >
         <Stack.Screen
            name={nameNav.home}
            component={BottomBarTabs}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name={nameNav.listPage}
            component={ListingPage}
            options={{ title: 'Populaires' }}
         />
      </Stack.Navigator>
   );
}
