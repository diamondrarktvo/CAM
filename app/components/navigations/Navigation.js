import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomBarTabs from './tabs/BottomBarTabs';

export default function Navigation() {
   return (
      <NavigationContainer>
         <BottomBarTabs />
      </NavigationContainer>
   );
}
