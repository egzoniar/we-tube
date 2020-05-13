import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native'
import Header from '../Header/Header';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HomeItem from '../Home-Item/HomeItem'
import { toggleCanScrollToTop, toggleScrollToTop } from '../../redux/home/home.actions';
import { setPlayerItem } from '../../redux/Player/player.actions'



const HomeList = props => {
  const {
    videos, canScrollToTop, setCanScrollToTop,
    scrollToTop, setScrollToTop, setThisPlayerItem
  } = props

  const flatListRef = useRef();

  const renderItem = ({ item }) => {
    const navigation = props.nav

    const prps = {
      navigate: navigation.navigate,
      item
    }

    const playerItem = {
      online: true,
      videoId: item.videoId,
      title: item.title
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setThisPlayerItem(playerItem)
          navigation.navigate('Player')
        }}>
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
      keyExtractor={item => item.videoId}
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
  setScrollToTop: () => dispatch(toggleScrollToTop()),
  setThisPlayerItem: item => dispatch(setPlayerItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeList)
