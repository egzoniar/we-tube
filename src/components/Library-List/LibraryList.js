import React from 'react'
import { View, Text } from 'react-native'

const LibraryList = props => {
  const { videos } = props

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={videos}
      // keyExtractor={item => item.id}
      ListHeaderComponent={() => <Header title="WeTube" search={false} />}
      keyExtractor={item => item.videoId}
      renderItem={renderItem}
      ref={flatListRef}
      onScroll={e => toggleTopArrow(e.nativeEvent.contentOffset.y)}
    />
  )
}

export default LibraryList
