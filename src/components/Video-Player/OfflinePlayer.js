import React from 'react'
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native'
import Video from 'react-native-video'

const OfflinePlayer = props => {
  const { item } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Video
        playInBackground={true}
        resizeMode="contain"
        controls={true}
        style={styles.video}
        source={{ uri: item.videoPath }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    // borderColor: 'red'
  },
  video: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    // borderColor: 'red'
  },
  title: {
    fontSize: 18,
    position: 'absolute',
    top: 0
  }
})

export default OfflinePlayer