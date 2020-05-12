import { StyleSheet } from 'react-native';
import StyleGuide from '../StyleGuide'
const palette = StyleGuide.palette

export const styles = StyleSheet.create({
  wrapper: {},
  item: {
    borderWidth: 1,
    // borderColor: 'blue',
    paddingTop: 40,
    paddingBottom: 60
  },
  channelTitle: {
    fontSize: 10,
    color: palette.accent2
  },
  videoImage: {
    minHeight: 185,
    borderWidth: 1,
    // borderColor: 'cyan'
  },
  videoTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    shadowOpacity: 0,
    paddingHorizontal: 13,
    letterSpacing: -1.5,
    color: palette.accent2
  },
})