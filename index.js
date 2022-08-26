/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { myPromise } from './src/Promise/promise';

AppRegistry.registerComponent(appName, () => myPromise);
