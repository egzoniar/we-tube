import HomeActionTypes from './home.types'

export const setSearchTerm = term => ({
  type: HomeActionTypes.SET_SEARCH_TERM,
  payload: term
})