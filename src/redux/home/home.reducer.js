import HomeActionTypes from './home.types'

const INITIAL_STATE = {
  searchTerm: ''
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }

    default: return state
  }

}

export default homeReducer