import HomeActionTypes from './home.types'

const INITIAL_STATE = {
  searchTerm: '',
  canScrollToTop: false,
  scrollToTop: false
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.TOGGLE_CAN_SCROLL_TO_TOP:
      return {
        ...state,
        canScrollToTop: action.payload
      }
    case HomeActionTypes.TOGGLE_SCROLL_TO_TOP:
      return {
        ...state,
        scrollToTop: !state.scrollToTop
      }
    case HomeActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }

    default: return state
  }

}

export default homeReducer