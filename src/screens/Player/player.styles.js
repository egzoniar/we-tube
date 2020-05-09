import { StyleSheet, Dimensions } from 'react-native';

import StyleGuide from '../../components/StyleGuide'

const palette = StyleGuide.palette
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1, borderColor: 'red',
    backgroundColor: palette.primary,
    paddingTop: 30,
    paddingBottom: 70
  },
  text: {
    // borderWidth: 1, borderColor: 'red',
  },
  webView: {
    width
  }
})

export default styles