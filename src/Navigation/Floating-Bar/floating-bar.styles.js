import { StyleSheet } from 'react-native';
import StyleGuide from '../../components/StyleGuide'
const palette = StyleGuide.palette

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 5, right: 10,
    minWidth: 170,
    alignSelf: 'center'
  },
  tab: {
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 12,
    borderRadius: 50,
    backgroundColor: palette.accent1,
    elevation: 3
  },
  icon: {
    alignSelf: 'center',
    color: palette.accent2,
  },
  tab_title: {
    color: '#222',
    fontSize: 10,
    alignSelf: 'center'
  }
})

export default styles