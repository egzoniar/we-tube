import { StyleSheet } from 'react-native';
import StyleGuide from '../StyleGuide'

const palette = StyleGuide.palette

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'baseline',
    flexDirection: 'row',
    marginHorizontal: 13,
    // borderWidth: 1, borderColor: 'yellow',
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    // borderWidth: 1, borderColor: 'yellow'
  }
})

export default styles