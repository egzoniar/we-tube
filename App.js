import React from 'react';
import Navigator from './src/Navigation/Navigator'

import { Provider } from 'react-redux'
import configureStore from './src/redux/store'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

export default App;