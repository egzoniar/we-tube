import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';

import { styles } from './library.styles'
import EmptyList from '../../components/EmptyList'

import HomeItem from '../../components/Home-Item/HomeItem'

import { DATA } from '../Home/home.data'

const LibraryScreen = props => {

  const [videoArr, setVideoArr] = useState([])

  const getVideos = async () => {
    const videos = await AsyncStorage.getItem('savedVideos')

    if (videos === null) setVideoArr([])
    else setVideoArr(JSON.parse(videos))
    console.log(JSON.parse(videos))
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <View style={styles.container}>
      {(videoArr.length === 0) ? <EmptyList />
        : videoArr.map(v => (
          <View>
            <Text style={{ fontSize: 25, color: '#fff' }}>{v.title}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default LibraryScreen;