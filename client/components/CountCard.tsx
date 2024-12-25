import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

type CountCardProp = {
  count: number
}

const CountCard: React.FC<CountCardProp> = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Total Cards
      </Text>
      <Text style={styles.count}>
        {count}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#FFE3E3', // Light pink background
    borderWidth: 1,
    borderColor: '#A35D6A', // Darker pink border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, // Shadow for Android
    width: 150, // Fixed width for card
    flexBasis: '60%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A35D6A', // Highlighted text color
  },
})

export default CountCard
