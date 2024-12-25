import React from 'react'
import { View } from 'react-native'
import MiniatureCard from '../MiniatureCard'

// TODO => this will get a prop with data and will render it accordingly
const CardListContainer:React.FC = () => {
  return (
    <View>
      <MiniatureCard/>
      <MiniatureCard/>
      <MiniatureCard/>
      <MiniatureCard/>
      <MiniatureCard/>
      <MiniatureCard/>
    </View>
  )
}

export default CardListContainer;