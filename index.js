/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Counter } from './components/counter/CounterFunction';
import { Dog } from './components/reducer/Dog';
import Home from './src/Home';
import Main from './src/ReduxExample/Main';

AppRegistry.registerComponent(appName, () => Main);
