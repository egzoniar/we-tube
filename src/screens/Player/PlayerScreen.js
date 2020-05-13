import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native'
import { View } from 'react-native';
import styles from './player.styles'
import EmptyList from '../../components/EmptyList'
import OnlinePlayer from '../../components/Video-Player/OnlinePlayer';
import OfflinePlayer from '../../components/Video-Player/OfflinePlayer';

const PlayerScreen = props => {
  const { playerItem } = props

  return (
    <View style={styles.container}>
      {
        (Object.keys(playerItem).length === 0)
          ? <EmptyList text='home' />
          : (playerItem.online)
            ? <OnlinePlayer
              item={playerItem} />
            : <OfflinePlayer item={playerItem} />
      }
    </View>
  )

}

const mapStateToProps = state => ({
  playerItem: state.player.playerItem
})

export default connect(mapStateToProps)(PlayerScreen);