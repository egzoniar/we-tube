import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SearchBar from '../Search-Bar/SearchBar'

import styles from './header.styles'

const ICON_SIZE = 33

const Header = ({ title }) => {
  const [searchActive, setSearchActive] = useState(false)
  const [text, setText] = useState('')

  const handleSearchText = inp => setText(inp)

  const toggleSearchBar = () => {
    if (searchActive) {
      setSearchActive(!searchActive)
      setText('')
    }
    else setSearchActive(!searchActive)
  }

  return (
    <View style={styles.header}>
      {(searchActive) ? null :
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>}
      <View style={styles.rightIcons}>
        <SearchBar
          searchActive={searchActive}
          toggle={toggleSearchBar}
          text={text}
          handleSearchText={handleSearchText}
        />
      </View>
    </View>
  )
}

export default Header;