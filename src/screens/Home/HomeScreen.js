import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import { styles } from './home.styles'
import { youtubeApiUrl } from '../../api/youtube-v3'

import HomeList from '../../components/Home-List/HomeList'

const HomeScreen = props => {
  const { searchTerm } = props

  const [videos, setVideos] = useState([])
  const [loadedVideos, setLoadedVideos] = useState([])

  const fetchHomeData = async () => {
    const response = await fetch(
      youtubeApiUrl({
        q: searchTerm,
        maxResults: 50
      })
    )
    const json = await response.json();
    setVideos(json['items'])
    if (searchTerm === '')
      setLoadedVideos(json['items'])
  };

  useEffect(() => {
    if (loadedVideos.length > 0) {
      if (searchTerm === '') {
        setVideos(loadedVideos)
      }
      else fetchHomeData()
    }
    else {
      fetchHomeData()
    }
  }, [searchTerm])

  return (
    <View style={styles.container} >
      <HomeList
        nav={props.navigation}
        videos={videos} />
    </View>
  )
}

const mapStateToProps = state => ({
  searchTerm: state.home.searchTerm
})

export default connect(mapStateToProps)(HomeScreen)