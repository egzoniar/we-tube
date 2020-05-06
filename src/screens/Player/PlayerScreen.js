import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { WebView } from 'react-native-webview'
import styles from './player.styles'
import EmptyList from '../../components/EmptyList'

const PlayerScreen = ({ route }) => {
  if (!route.params)
    route.params = { videoId: '' }

  const [id, setId] = useState('')

  useEffect(() => {
    setId(route.params.videoId)
  }, [route.params.videoId])

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        //setId('')
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      {id ? <WebView
        style={styles.webView}
        source={{ uri: "https://www.youtube.com/embed/" + id }}
        startInLoadingState={true}
      /> : <EmptyList text='home' />}
    </View>
  )

}

export default PlayerScreen;