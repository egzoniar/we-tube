import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native'
import { styles } from './home.styles'
import { fetchVideos } from '../../api/youtube-v3'
import LoadingSpinner from '../../components/LoadingSpinner'

import HomeList from '../../components/Home-List/HomeList'
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyleGuide from '../../components/StyleGuide';

const HomeScreen = props => {
  const { searchTerm } = props

  const [videos, setVideos] = useState([])
  const [loadedVideos, setLoadedVideos] = useState([])
  const [networkErr, setNetworkErr] = useState({ err: false, errMsg: '' })
  const [loading, setLoading] = useState(false)

  const fetchHomeData = async () => {
    setNetworkErr({ err: false, errMsg: '' })
    setLoading(true)
    try {
      const response = await fetchVideos(searchTerm)

      if (response.error) throw new Error(response.error.message)

      setVideos(response)
      if (searchTerm === '')
        setLoadedVideos(response)

      setLoading(false)
      setNetworkErr({ err: false, errMsg: '' })
    }
    catch (err) {
      console.log(err.message)
      setLoading(false)
      setNetworkErr({ err: true, errMsg: err.message + '!' })
    }
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
      {(loading)
        ? <LoadingSpinner />
        : (networkErr.err)
          ? <View style={styles.errContainer}>
            <Text style={{ textAlign: 'center' }}>{networkErr.errMsg}</Text>
            <TouchableOpacity
              style={{ marginTop: 7 }}
              onPress={fetchHomeData}>
              <Text style={{ color: '#4F8BF1', fontSize: 13 }}>Try Again</Text>
            </TouchableOpacity>
          </View>
          : <HomeList
            nav={props.navigation}
            videos={videos} />}
    </View>
  )
}

const mapStateToProps = state => ({
  searchTerm: state.home.searchTerm
})

export default connect(mapStateToProps)(HomeScreen)