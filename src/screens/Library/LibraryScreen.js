import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { Text, View } from 'react-native';
import LoadingSpinner from '../../components/LoadingSpinner'

import { styles } from './library.styles'
import EmptyList from '../../components/EmptyList'
import LibraryList from '../../components/Library-List/LibraryList';

import { getVideos } from '../../redux/Player/player.utils'

const LibraryScreen = props => {

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getVideos().then(res => {
        if (res.length !== videos.length)
          setVideos(res)

        setLoading(false)
      })


      // return () => {
      //   // Do something when the screen is unfocused
      //   // Useful for cleanup functions

      // };
    }, [])
  )

  return (
    <View style={styles.container}>
      {(loading)
        ? <LoadingSpinner />
        : (videos.length === 0)
          ? <EmptyList />
          : <LibraryList
            nav={props.navigation}
            videos={videos} />
      }
    </View>
  )
}

export default LibraryScreen;