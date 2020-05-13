import { StyleSheet } from 'react-native';
import StyleGuide from '../../components/StyleGuide'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.primary
  },
  errContainer: {
    justifyContent: 'center',
    alignItems: 'center', flex: 1
  }
})

