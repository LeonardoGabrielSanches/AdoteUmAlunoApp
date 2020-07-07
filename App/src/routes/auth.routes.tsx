import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '../pages/Login';
import Register from '../pages/Register';
import routesNames from './routesNames';

const AppStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator initialRouteName={routesNames.login}>
      <AppStack.Screen
        name={routesNames.login}
        component={Login}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name={routesNames.register}
        component={Register}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default AuthRoutes;
