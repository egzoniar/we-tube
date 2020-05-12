import PlayerActionTypes from './player.types'

const INITIAL_STATE = {
  playerItem: {}
}

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayerActionTypes.SET_PLAYER_ITEM:
      return {
        ...state,
        playerItem: action.payload
      }

    default: return state
  }
}

export default playerReducer