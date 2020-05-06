import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native'
import Header from '../../components/Header/Header';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HomeItem from '../../components/Home-Item/HomeItem'
import { toggleCanScrollToTop, toggleScrollToTop } from '../../redux/home/home.actions';



const VideoList = props => {
  const { videos, canScrollToTop, setCanScrollToTop, scrollToTop, setScrollToTop } = props
  const flatListRef = useRef();

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

    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Player', { videoId })}>
        <HomeItem {...prps} />
      </TouchableWithoutFeedback>
    )
  }

  useEffect(() => {
    if (scrollToTop) {
      setScrollToTop()
      flatListRef.current.scrollToIndex({ index: 0, animated: true })
    }
  }, [scrollToTop])

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('hini', canScrollToTop)
        setCanScrollToTop(false)
        console.log('VideoList: unfocused')
      };
    }, [])
  );

  const toggleTopArrow = y => {
    if (y > 1000 && !canScrollToTop)
      setCanScrollToTop(true)
    else if (y <= 100 && canScrollToTop) {
      setCanScrollToTop(false)
    }
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={videos}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <Header title="WeTube" />}
      // keyExtractor={item => item.id.videoId}
      renderItem={renderItem}
      ref={flatListRef}
      onScroll={e => toggleTopArrow(e.nativeEvent.contentOffset.y)}
    />
  )
}

const mapStateToProps = state => ({
  canScrollToTop: state.home.canScrollToTop,
  scrollToTop: state.home.scrollToTop
})

const mapDispatchToProps = dispatch => ({
  setCanScrollToTop: bool => dispatch(toggleCanScrollToTop(bool)),
  setScrollToTop: () => dispatch(toggleScrollToTop())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)
