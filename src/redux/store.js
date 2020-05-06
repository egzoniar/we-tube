import { createStore } from 'redux'
import rootReducer from './root-reducer'


const configureStore = () => createStore(rootReducer)

export default configureStore