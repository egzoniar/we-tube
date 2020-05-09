import React from 'react';
import Navigator from './src/Navigation/Navigator'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'

const store = configureStore()

const App = () => {


  return (
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Navigator />
    </Provider>
  )
}
export default App;