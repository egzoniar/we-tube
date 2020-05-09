import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('WeTube', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('WeTube', { rootTag });
}
