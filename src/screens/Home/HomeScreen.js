import React, { useEffect, useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { styles } from './home.styles'
import Header from '../../components/Header/Header';
import { FlatList } from 'react-native-gesture-handler';

import { youtubeApiUrl } from '../../api/youtube-v3'
import HomeItem from '../../components/Home-Item/HomeItem'

const HomeScreen = props => {
  const [videos, setVideos] = useState([])

  const fetchHomeData = async () => {
    const response = await fetch(
      youtubeApiUrl({
        q: "",
        maxResults: 50
      })
    )
    const json = await response.json();
    setVideos(json['items']);
  };

  useEffect(() => {
    fetchHomeData()
  }, [])

  const searchApi = async () => {
    const response = await fetch(
      youtubeApiUrl({
        q: "",
        maxResults: 50
      })
    )
    const json = await response.json();
    setVideos(json['items']);
  }

  const renderItem = ({ item, index }) => {
    const { navigation } = props
    const { channelTitle, title, thumbnails } = item.snippet
    const { videoId } = item.id

    const prps = {
      navigate: navigation.navigate,
      title, videoId,
      channel_name: channelTitle,
      imageUrl: thumbnails.high.url
    }

    if (index === 0) {
      return (
        <View>
          <Header title="WeTube" />
          <HomeItem {...prps} />
        </View>
      )
    }
    return <HomeItem {...prps} />
  }

  return (
    <View style={styles.container} >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={videos}
        keyExtractor={item => item.id.videoId}
        renderItem={renderItem}
      />
    </View>
  )
}

export default HomeScreen