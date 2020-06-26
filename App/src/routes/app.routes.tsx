import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import Login from '../pages/Login';

const Tab = createBottomTabNavigator();
//Lembrar de trocar , apenas exemplo de bottom tab navigator
const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
