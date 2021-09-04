/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerHeadlessTask('YourHeadlessTask', () => async data => console.log(data));
AppRegistry.registerComponent(appName, () => App);
