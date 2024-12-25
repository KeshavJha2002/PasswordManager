import CountCard from '../CountCard'
import CreateNewCard from '../CreateNewCard'
import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardInfoContainer = () => {
  return(
  <View style={styles.container}>
    <CountCard count={8}/>
    <CreateNewCard/>
  </View>
)};

const styles = StyleSheet.create({
  container:{
    margin: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default CardInfoContainer