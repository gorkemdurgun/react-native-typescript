/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { myReduceLoopAsyncAwait } from './src/Promise/async-await';

AppRegistry.registerComponent(appName,  myReduceLoopAsyncAwait);
