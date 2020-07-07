import { AppRegistry } from 'react-native';
import App from './src/index';
import { expo } from './app.json';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

AppRegistry.registerComponent(expo.name, () => App);
