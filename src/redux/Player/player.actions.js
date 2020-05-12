import PlayerActionTypes from './player.types'

export const toggleIsPlaying = term => ({
  type: PlayerActionTypes.SET_IS_PLAYING
})

export const setPlayerItem = item => ({
  type: PlayerActionTypes.SET_PLAYER_ITEM,
  payload: item
})