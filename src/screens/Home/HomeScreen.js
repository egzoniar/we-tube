import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback } from 'react-native'
import { styles } from './home.styles'
import Header from '../../components/Header/Header';
import { FlatList } from 'react-native-gesture-handler';

import { youtubeApiUrl } from '../../api/youtube-v3'
import HomeItem from '../../components/Home-Item/HomeItem'

import { DATA } from './home.data'

const HomeScreen = props => {
  const { searchTerm } = props
  console.log('searchTerm', searchTerm)

  const [videos, setVideos] = useState([])
  const [loadedVideos, setLoadedVideos] = useState([])

  const fetchHomeData = async () => {
    console.log('fetching data...')
    const response = await fetch(
      youtubeApiUrl({
        q: searchTerm,
        maxResults: 50
      })
    )
    const json = await response.json();
    // setVideos(json['items']);
    setVideos(DATA)
    setLoadedVideos(DATA)
  };

  useEffect(() => {
    if (loadedVideos.length > 0)
      setVideos(loadedVideos)
    else fetchHomeData()
  }, [searchTerm])

  const renderItem = ({ item, index }) => {
    const { navigation } = props
    // const { channelTitle, title, thumbnails } = item.snippet
    const { videoId } = item.id
    const { channel_name, title, imageUrl } = item

    const prps = {
      navigate: navigation.navigate,
      title, videoId,
      channel_name,
      imageUrl
    }
    // const prps = {
    //   navigate: navigation.navigate,
    //   title, videoId,
    //   channel_name: channelTitle,
    //   imageUrl: thumbnails.high.url
    // }

    // if (index === 0) {
    //   return (
    //     <View>
    //       <Header title="WeTube" />
    //       <HomeItem {...prps} />
    //     </View>
    //   )
    // }
    return <View>
      <HomeItem {...prps} />
    </View>
  }

  return (
    <View style={styles.container} >
      <Header title="WeTube" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={videos}
        keyExtractor={item => item.id}
        // keyExtractor={item => item.id.videoId}
        renderItem={renderItem}
      />
    </View>
  )
}

const mapStateToProps = state => ({
  searchTerm: state.home.searchTerm
})

export default connect(mapStateToProps)(HomeScreen)