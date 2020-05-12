import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from './library-item.styles'

const LibraryItem = ({ title, videoPath, thumbPath }) => (
  <View style={styles.wrapper}>
    <View style={styles.item}>
      <Image source={{ uri: thumbPath }} style={styles.videoImage} />
      <View style={styles.titleWrapper}>
        <Text style={styles.videoTitle}>{title.toUpperCase()}</Text>
      </View>
    </View>
  </View>
)

export default LibraryItem;