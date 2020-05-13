import PlayerActionTypes from './player.types'

const INITIAL_STATE = {
  playerItem: {},
  canDownload: false,
  startDownloading: false
}

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayerActionTypes.SET_PLAYER_ITEM:
      return {
        ...state,
        playerItem: action.payload
      }
    case PlayerActionTypes.SET_CAN_DOWNLOAD:
      return {
        ...state,
        canDownload: action.payload
      }
    case PlayerActionTypes.SET_START_DOWNLOADING:
      return {
        ...state,
        startDownloading: action.payload
      }
    default: return state
  }
}

export default playerReducer