import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Main from '../pages/Main';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
