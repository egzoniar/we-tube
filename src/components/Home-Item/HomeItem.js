import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from './home-item.styles'

const HomeItem = props => {
  const {
    videoId, title, thumbnail, publishedAt,
    channelId, channelTitle, duration, views
  } = props.item

  console.log(duration)

  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <Image source={{ uri: thumbnail }} style={styles.videoImage} />
        <View style={styles.detailsWrapper}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/4.jpg" }}
            style={styles.channelImage} />
          <View>
            <Text style={styles.channelTitle} >
              {channelTitle} &#183; {views} Views
          </Text>
            <Text style={styles.viewsText}>Published {publishedAt}</Text>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.videoTitle}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeItem;