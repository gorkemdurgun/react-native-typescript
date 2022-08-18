/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Counter } from './components/counter/CounterFunction';
import { Dog } from './components/reducer/Dog';
import Home from './src/Home';
import ReduxApp from './src/ReduxExample/ReduxApp';

AppRegistry.registerComponent(appName, () => ReduxApp);
