import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native'
import Header from '../Header/Header';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HomeItem from '../Home-Item/HomeItem'
import { toggleCanScrollToTop, toggleScrollToTop } from '../../redux/home/home.actions';



const HomeList = props => {
  const { videos, canScrollToTop, setCanScrollToTop, scrollToTop, setScrollToTop } = props
  const flatListRef = useRef();

  const renderItem = ({ item, index }) => {
    const navigation = props.nav
    const { channelTitle, title, thumbnails } = item.snippet
    const { videoId } = item.id

    const prps = {
      navigate: navigation.navigate,
      title, videoId,
      channel_name: channelTitle,
      imageUrl: thumbnails.high.url
    }

    const videoItem = {
      fromHome: true,
      videoId, title,
      videoPath: '',
      thumbPath: ''
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Player', { videoId, videoItem })}>
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
        setCanScrollToTop(false)
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
      // keyExtractor={item => item.id}
      ListHeaderComponent={() => <Header title="WeTube" search={true} />}
      keyExtractor={item => item.id.videoId}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeList)