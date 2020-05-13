import PlayerActionTypes from './player.types'

export const toggleIsPlaying = term => ({
  type: PlayerActionTypes.SET_IS_PLAYING
})

export const setPlayerItem = item => ({
  type: PlayerActionTypes.SET_PLAYER_ITEM,
  payload: item
})

export const setCanDownload = bool => ({
  type: PlayerActionTypes.SET_CAN_DOWNLOAD,
  payload: bool
})

export const setStartDownloading = bool => ({
  type: PlayerActionTypes.SET_START_DOWNLOADING,
  payload: bool
})