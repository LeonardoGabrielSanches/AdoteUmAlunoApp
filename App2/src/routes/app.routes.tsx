import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import Main from '../pages/Main';

const Tab = createBottomTabNavigator();
//Lembrar de trocar , apenas exemplo de bottom tab navigator
const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
