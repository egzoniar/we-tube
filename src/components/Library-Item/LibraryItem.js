import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

import { deleteVideo } from '../../redux/Player/player.utils'
import { setPlayerItem } from '../../redux/Player/player.actions'

import { styles } from './library-item.styles'

const LibraryItem = ({ videoItem, nav, setThisPlayerItem }) => {

  const [confirm, setConfirm] = useState(false)

  const onDeleteHandler = () => {
    if (confirm) {
      deleteVideo(videoItem)
      setConfirm(false)
    }
    else {
      setConfirm(true)
    }
  }

  const onCancelHandler = () => {
    setConfirm(false)
  }

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback
        onPress={() => {
          setThisPlayerItem(videoItem)
          nav.navigate('Player')
        }}>
        <View style={styles.item}>
          <Image source={{ uri: 'file:///' + videoItem.videoPath }} style={styles.videoImage} />
          <View style={styles.titleWrapper}>
            <Text style={styles.videoTitle}>{videoItem.title.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.deleteContainer}>
        {(confirm)
          ? <TouchableOpacity
            onPress={onCancelHandler}
            style={styles.cancelButton}>
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity> : null}
        <TouchableOpacity
          onPress={onDeleteHandler}
          style={styles.deleteButton}>
          <Text style={styles.deleteText}>
            {(confirm) ? 'Confirm' : 'Delete'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  setThisPlayerItem: item => dispatch(setPlayerItem(item))
})

export default connect(null, mapDispatchToProps)(LibraryItem);