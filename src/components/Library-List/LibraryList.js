import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../Header/Header'
import LibraryItem from '../Library-Item/LibraryItem'
import { setPlayerItem } from '../../redux/Player/player.actions'

const LibraryList = props => {
  const { videos, nav, setThisPlayerItem } = props

  const renderItem = ({ item }) => {
    const { videoId, title, videoPath, thumbPath } = item

    const videoItem = {
      online: false,
      videoId, title,
      videoPath, thumbPath
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setThisPlayerItem(videoItem)
          nav.navigate('Player')
        }}>
        <LibraryItem {...item} />
      </TouchableWithoutFeedback>
    )
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

const mapDispatchToProps = dispatch => ({
  setThisPlayerItem: item => dispatch(setPlayerItem(item))
})

export default connect(null, mapDispatchToProps)(LibraryList)
