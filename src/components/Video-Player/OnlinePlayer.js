import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Button, View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview'
const { width } = Dimensions.get('window')

import { downloadVideo } from '../../redux/Player/player.utils'

import { setCanDownload } from '../../redux/Player/player.actions'
import { setStartDownloading } from '../../redux/Player/player.actions'

const OnlinePlayer = props => {
  const {
    item, setCanDownload, startDownloading,
    setStartDownloading
  } = props

  const youtubeURL = 'https://www.youtube.com/embed/' + item.videoId

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setCanDownload(true)

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        setCanDownload(false)
      };
    }, [])
  )

  useEffect(() => {
    if (startDownloading) {
      downloadVideo(item)
      setStartDownloading(false)
    }
  }, [startDownloading])

  return (
    <View>
      <WebView
        style={styles.webView}
        originWhitelist={['https://www.youtube.com/embed/*']}
        source={{ uri: youtubeURL }}
        startInLoadingState={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  webView: { width }
})

const mapStateToProps = state => ({
  startDownloading: state.player.startDownloading
})

const mapDispatchToProps = dipatch => ({
  setCanDownload: bool => dipatch(setCanDownload(bool)),
  setStartDownloading: bool => dipatch(setStartDownloading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(OnlinePlayer)
