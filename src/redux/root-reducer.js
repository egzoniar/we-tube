import { combineReducers } from 'redux'

// import reducers...
import homeReducer from './home/home.reducer'

const rootReducer = combineReducers({
  // reducers...
  home: homeReducer
})

export default rootReducer