import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateNewCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="add" size={28} color="#A35D6A" /> 
      <Text style={styles.text}>Add New</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
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
    flexBasis: '35%',
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#A35D6A', // Matching the theme
  },
})

export default CreateNewCard
