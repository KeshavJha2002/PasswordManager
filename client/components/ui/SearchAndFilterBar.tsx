import React from 'react'
import { View, StyleSheet } from 'react-native'
import FilterBox from '../FilterBox'
import SearchBox from '../SearchBox'

const SearchAndFilterBar:React.FC = () => {
  return (
    <View style={styles.search_filter_box}>
      <SearchBox/>
      <FilterBox/>
    </View>
  )
}


const styles = StyleSheet.create({
  search_filter_box: {
    margin: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default SearchAndFilterBar;