import { StyleSheet } from 'react-native';
import StyleGuide from '../StyleGuide'
const palette = StyleGuide.palette

export const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 40
  },
  item: {
    borderWidth: 1,
    // borderColor: 'blue',
    paddingTop: 40,
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
  deleteContainer: {
    // borderWidth: 1, borderColor: 'red',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15
  },
  cancelButton: {
    // borderWidth: 1, borderColor: 'red',
    padding: 7
  },
  deleteButton: {
    // borderWidth: 1, borderColor: 'red',
    padding: 7
  },
  cancelText: {
    color: palette.secondary
  },
  deleteText: {
    color: palette.secondary
  }
})