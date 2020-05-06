import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
//cloud-download

import StyleGuide from './StyleGuide'
const palette = StyleGuide.palette

const EmptyList = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Nothing to show!</Text>
      {(text == 'home') ?
        <Text style={styles.text2}>Tap  <Icon name='home' size={15} />  and click a video you like to watch.</Text>
        : <Text style={styles.text2}>Please go to  <Icon name='airplay' size={15} />  screen while the video is playing, you can save it by tapping  <Icon name='cloud-download' size={15} />  icon.</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
    color: palette.accent2
  },
  text2: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    color: palette.accent2
  }
})

export default EmptyList
