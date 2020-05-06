import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import { connect } from 'react-redux'
import { setSearchTerm } from '../../redux/home/home.actions'

import SearchBar from '../Search-Bar/SearchBar'

import styles from './header.styles'

const Header = ({ title, setSearchTerm, searchTerm }) => {

  const [searchActive, setSearchActive] = useState(false)
  const [text, setText] = useState('')

  const handleSearchText = inp => setText(inp)

  const toggleSearchBar = () => {
    if (searchActive) {
      setSearchActive(!searchActive)
      setSearchTerm('')
      setText('')
    }
    else setSearchActive(!searchActive)
  }

  useEffect(() => {
    if (searchTerm !== '') {
      setSearchActive(true)
      setText(searchTerm)
    }
  }, [])

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
          setSearchTerm={() => setSearchTerm(text)}
          handleSearchText={handleSearchText}
        />
      </View>
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch(setSearchTerm(term))
})

const mapStateToProps = state => ({
  searchTerm: state.home.searchTerm
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);