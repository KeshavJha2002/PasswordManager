import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { textColors } from '../constants/Colors';

const SearchBox: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

// TODO => When the searchText is not empty, and the input box is on, give a cross icon
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Icon name="search" size={22} color="#9e9e9e" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Titles..."
          placeholderTextColor={textColors.placeholderText}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    flexBasis: '85%'
  },
  icon: {
    paddingRight: 8,
    paddingLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: textColors.primary,
  },
});

export default SearchBox;
