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
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: palette.accent1,
    // borderColor: 'violet'
  },
  channelTitle: {
    fontSize: 10,
    color: palette.accent2
  },
  channelImage: {
    height: 28,
    width: 28,
    marginRight: 10,
    borderRadius: 50
  },
  viewsText: {
    fontSize: 9,
    color: palette.accent3
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