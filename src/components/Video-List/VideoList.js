import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header/Header';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HomeItem from '../../components/Home-Item/HomeItem'



const VideoList = props => {
  const { videos } = props

  const renderItem = ({ item, index }) => {
    const navigation = props.nav
    // const { channelTitle, title, thumbnails } = item.snippet
    // const videoId = item.id
    const videoId = "jhQPasMN5WA"
    const { channel_name, title, imageUrl } = item


    const prps = {
      title,
      channel_name,
      imageUrl
    }
    // const prps = {
    //   navigate: navigation.navigate,
    //   title, videoId,
    //   channel_name: channelTitle,
    //   imageUrl: thumbnails.high.url
    // }

    if (index === 0) {
      return (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Player', { videoId: "0NyQTqpsh_8" })}>
          <Header title="WeTube" />
          <HomeItem {...prps} />
        </TouchableWithoutFeedback>
      )
    }
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Player', { videoId })}>
        <HomeItem {...prps} />
      </TouchableWithoutFeedback>
    )
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={videos}
      keyExtractor={item => item.id}
      // keyExtractor={item => item.id.videoId}
      renderItem={renderItem}
    />
  )
}

export default VideoList
