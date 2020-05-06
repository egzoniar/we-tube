import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import styles from './floating-bar.styles'

import StyleGuide from '../../components/StyleGuide'
const palette = StyleGuide.palette

const FloatingBar = ({ state, descriptors, navigation }) => {

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;

        switch (route.name) {
          case 'Home': iconName = 'home'; break;
          case 'Library': iconName = 'folder'; break;
          case 'Player': iconName = 'airplay'; break;
          // case 'Save': iconName = 'cloud-download'; break;
          // case 'GoUp': iconName = 'chevron-up';
          case 'GoUp': iconName = 'arrow-up-thick';
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            style={{ ...styles.tab, backgroundColor: isFocused ? palette.accent1 : palette.accent2 }}
          >
            <Icon name={iconName} size={22} style={{ ...styles.icon, color: isFocused ? palette.accent2 : palette.accent3 }} />
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        accessibilityRole="button"
        style={{ ...styles.tab, backgroundColor: palette.accent2 }}
      >
        <Icon name='arrow-up-thick' size={22} style={{ ...styles.icon, color: palette.accent3 }} />
      </TouchableOpacity>
    </View>
  );
}

export default FloatingBar;