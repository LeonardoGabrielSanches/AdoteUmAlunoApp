import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AppProvider } from './contexts/appContext';
import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
