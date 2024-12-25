import React from 'react'
import { View, Pressable, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const FilterBox:React.FC = () => {
  const handleFilterPress = () => {
    Alert.alert('Filter button clicked');
  }
  return(
  <View>
    <Pressable onPress={handleFilterPress} style={{paddingRight: 8}}>
      <Icon name="filter-list" size={28} color="black" /> 
    </Pressable>
  </View>
)};

export default FilterBox;