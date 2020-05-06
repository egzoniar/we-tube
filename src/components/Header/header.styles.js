import { StyleSheet, Dimensions } from 'react-native';
import StyleGuide from '../StyleGuide'

const palette = StyleGuide.palette

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    minHeight: 80,
    maxHeight: 80,
    width: '100%',
    // borderWidth: 1, borderColor: 'red'
  },
  titleWrapper: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 5,
    // borderWidth: 1, borderColor: 'red'
  },
  title: {
    // borderWidth: 1, borderColor: 'red',
    color: palette.accent2,
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold'
  },
  span: {
    fontSize: 7,
    lineHeight: 9,
    marginLeft: 3,
    color: palette.accent4
  },
  rightIcons: {
    color: palette.accent2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerIcons: {
    color: palette.accent2,
    // borderWidth: 1, borderColor: 'yellow',
  },
})

export default styles