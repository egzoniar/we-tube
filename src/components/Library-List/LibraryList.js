import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../Header/Header'
import LibraryItem from '../Library-Item/LibraryItem'

const LibraryList = props => {
  const { videos, nav } = props

  const renderItem = ({ item }) => {
    const { videoId, title, videoPath } = item

    const videoItem = {
      online: false,
      videoId, title,
      videoPath
    }

    return (<LibraryItem videoItem={videoItem} nav={nav} />)
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={videos}
      ListHeaderComponent={() => <Header title="Library" search={false} />}
      keyExtractor={item => item.videoId}
      renderItem={renderItem}
    // ref={flatListRef}
    // onScroll={e => toggleTopArrow(e.nativeEvent.contentOffset.y)}
    />
  )
}



export default LibraryList
