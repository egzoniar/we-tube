import React from 'react'
import { Button, View, Image } from 'react-native'
import Video from 'react-native-video'

const OfflinePlayer = props => {
  const { videoSource } = props
  return (
    <View style={{ width: '100%' }}>
      <Video
        playInBackground={true}
        resizeMode="contain"
        controls={true}
        style={{ width: '100%', height: '40%', borderWidth: 1, borderColor: 'red' }}
        source={{ uri: RNFS.DownloadDirectoryPath + "/myfile.mp4" }} />
      <Image style={{ width: 300, height: 150, borderWidth: 1, borderColor: 'red' }} source={{ uri: "file:///" + RNFS.DownloadDirectoryPath + "/myfile.mp4" }} />
    </View>
  )
}

export default OfflinePlayer