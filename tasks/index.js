import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
