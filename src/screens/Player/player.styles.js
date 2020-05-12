import { StyleSheet, Dimensions } from 'react-native';

import StyleGuide from '../../components/StyleGuide'

const palette = StyleGuide.palette

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1, borderColor: 'red',
    backgroundColor: palette.primary,
    paddingTop: 30,
    paddingBottom: 70
  }
})

export default styles