import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';

import { styles } from './library.styles'
import EmptyList from '../../components/EmptyList'

import HomeItem from '../../components/Home-Item/HomeItem'

import { DATA } from '../Home/home.data'

const LibraryScreen = props => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          const {
            title,
            imageUrl,
            channel_name
          } = item

          const videoId = "tzcNCcfcdhE"

          const prps = {
            navigate: props.navigation.navigate,
            title, videoId,
            channel_name,
            imageUrl
          }

          if (index === 0) {
            return (
              <View>
                <Header title="Library" />
                <HomeItem {...prps} />
              </View>
            )
          }
          return <HomeItem {...prps} />
        }}
      />
      {/* <EmptyList /> */}
    </View>
  )
}

export default LibraryScreen;