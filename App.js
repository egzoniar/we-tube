import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigator from './src/Navigation/Navigator'

const App = () => (
  <SafeAreaProvider>
    <Navigator />
  </SafeAreaProvider>
)

export default App;