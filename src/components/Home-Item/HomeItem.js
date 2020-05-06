import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from './home-item.styles'

const HomeItem = ({ navigate, videoId, title, imageUrl, channel, channel_name }) => (
  <TouchableWithoutFeedback onPress={() => navigate('Player', { videoId })} >
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <Image source={{ uri: imageUrl }} style={styles.videoImage} />
        <View style={styles.detailsWrapper}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/4.jpg" }}
            style={styles.channelImage} />
          <View>
            <Text style={styles.channelTitle} >
              {channel_name} &#183; {parseInt((Math.random()) * 1000) + 1}K Views
          </Text>
            <Text style={styles.viewsText}>{parseInt(Math.random() * 10) + 1} months ago</Text>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.videoTitle}>{title.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default HomeItem;