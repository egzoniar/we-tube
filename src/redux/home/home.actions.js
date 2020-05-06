import HomeActionTypes from './home.types'

export const setSearchTerm = term => ({
  type: HomeActionTypes.SET_SEARCH_TERM,
  payload: term
})

export const toggleCanScrollToTop = bool => ({
  type: HomeActionTypes.TOGGLE_CAN_SCROLL_TO_TOP,
  payload: bool
})
export const toggleScrollToTop = () => ({
  type: HomeActionTypes.TOGGLE_SCROLL_TO_TOP
})