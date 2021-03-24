/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import setup from './setup'
AppRegistry.registerComponent(appName, () => App);
