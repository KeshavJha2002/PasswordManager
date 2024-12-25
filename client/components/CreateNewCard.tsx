import { Text, StyleSheet, Pressable, Animated } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const CreateNewCard: React.FC = () => {
  const [scaleValue] = useState(new Animated.Value(1));
  const router = useRouter();

  const onCardPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onCardPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    // router.push('form') is wrt the current url
    // this is wrt to root
    router.push('/form');
  };

  return (
    <Animated.View 
      style={[styles.animatedContainer, { transform: [{ scale: scaleValue }] }]}
    > 
      <Pressable 
        style={styles.container} 
        onPress={handlePress} 
        onPressIn={onCardPressIn} 
        onPressOut={onCardPressOut}
      >
        <Icon name="add" size={28} color="#A35D6A" /> 
        <Text style={styles.text}>Add New</Text>
      </Pressable>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  animatedContainer: {
    flexBasis: '35%', // Use percentage to fit flex row layout
  },
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
    flexGrow: 1, // Allows it to share space with CountCard
    aspectRatio: 1, // Maintain consistent height-to-width ratio
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#A35D6A', // Matching the theme
  },
});

export default CreateNewCard;
