import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import { styles } from './library.styles'
import EmptyList from '../../components/EmptyList'
import LibraryList from '../../components/Library-List/LibraryList';

const LibraryScreen = props => {

  const [videoArr, setVideoArr] = useState([])

  const getVideos = async () => {
    const videos = await AsyncStorage.getItem('savedVideos')

    if (videos !== null) {
      const vtemp = JSON.parse(videos)
      if (vtemp.length !== videoArr.length)
        setVideoArr(vtemp)
    }
  }

  useEffect(() => {
    // console.log("hini")
    getVideos()
  })

  return (
    <View style={styles.container}>
      {(videoArr.length === 0)
        ? <EmptyList />
        : <LibraryList
          nav={props.navigation}
          videos={videoArr} />
      }
    </View>
  )
}

export default LibraryScreen;