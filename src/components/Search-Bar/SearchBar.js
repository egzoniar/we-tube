import React, { useEffect } from 'react'
import { View, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StyleGuide from '../StyleGuide'
import styles from './search-bar.styles'

const { headerIconSize } = StyleGuide.icons

const SearchBar = props => {
  const { toggle, searchActive, handleSearchText, text, setSearchTerm } = props

  // useEffect(() => {
  //   setSearchTerm('Tyrone magnus')
  //   console.log('search-bar mounted')
  // }, [])

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={toggle}>
        <Icon
          style={{
            marginRight: (searchActive) ? 20 : 0,
            color: (searchActive) ? "rgba(255,255,255,.3)" : "#fff"
          }}
          name={(searchActive) ? "close" : "search"} size={headerIconSize} />
      </TouchableOpacity>
      {(searchActive) ?
        <TextInput
          placeholder="Search YouTube"
          placeholderTextColor="rgba(255,255,255,.3)"
          style={styles.searchInput}
          value={text}
          autoFocus={true}
          onBlur={setSearchTerm}
          onChangeText={(e) => handleSearchText(e)}
        /> : null}
    </View>
  )
}

export default SearchBar
