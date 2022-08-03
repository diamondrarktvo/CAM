import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './stack/StackNavigation';
import BottomBarTabs from './tabs/BottomBarTabs';

export default function Navigation() {
   return (
      <NavigationContainer>
         <StackNavigation />
      </NavigationContainer>
   );
}
