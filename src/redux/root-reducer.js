import { combineReducers } from 'redux'

// import reducers...
import homeReducer from './home/home.reducer'
import playerReducer from './Player/player.reducer'

const rootReducer = combineReducers({
  // reducers...
  home: homeReducer,
  player: playerReducer
})

export default rootReducer