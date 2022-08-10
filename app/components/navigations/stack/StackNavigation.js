import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { configStack } from './configStack';
//name util for stack navigation
import { nameStackNavigation as nameNav } from '_utils';
/*tab Navitation (top and bottom both)*/
import BottomBarTabs from '_components/navigations/tabs/BottomBarTabs';
/*screen normal |screen indépendant à afficher|*/
//from reusable
import { ListingPage } from '_components/reusable';

let Stack = createStackNavigator();
export default function StackNavigation() {
   return (
      <Stack.Navigator initialRouteName={nameNav.home}>
         <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={nameNav.home} component={BottomBarTabs} />
         </Stack.Group>

         <Stack.Group screenOptions={configStack.screenOptionsForHeaderShown}>
            <Stack.Screen
               name={nameNav.listPage}
               component={ListingPage}
               options={({ route }) => ({
                  title: route.params.titleScreen,
               })}
            />
         </Stack.Group>
      </Stack.Navigator>
   );
}
