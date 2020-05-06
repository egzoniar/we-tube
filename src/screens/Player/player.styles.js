import { StyleSheet, Dimensions } from 'react-native';

import StyleGuide from '../../components/StyleGuide'

const palette = StyleGuide.palette
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.primary
  },
  webView: {
    width,
    height: 100
  }
})

export default styles