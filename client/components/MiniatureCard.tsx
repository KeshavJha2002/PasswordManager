import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { card, border } from '../constants/Colors';

const MiniatureCard: React.FC = () => {
  const [scaleValue] = useState(new Animated.Value(1));

  const title = "Title";
  const icon = title[0];

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

  const handleEdit = () => {
    Alert.alert('Edit button pressed');
  };

  const handleLongPress = () => {
    Alert.alert('Long pressed');
  };

  const handleCardPress = () => {
    Alert.alert('Card is pressed');
  }

  return (
    <View style={{ margin: 6 }}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Pressable
          style={[styles.card]} 
          onLongPress={handleLongPress}
          onPress={handleCardPress}
          onPressIn={onCardPressIn}
          onPressOut={onCardPressOut}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{icon}</Text>
          </View>

          <Text style={styles.titleText}>{title}</Text>

          <Pressable style={styles.editButton} onPress={handleEdit}>
            <Ionicons name="create-outline" size={18} color="#A35D6A" />
            <Text style={styles.editText}>Edit</Text>
          </Pressable>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    backgroundColor: card.bgColor,
  },
  selectedCard: {
    borderColor: '#FF6B6B', // Highlighted border when selected
    borderWidth: 2,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A35D6A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FFEBE8',
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A35D6A',
  },
  titleText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A35D6A',
    backgroundColor: '#FFE3E3',
  },
  editText: {
    marginLeft: 4,
    color: '#A35D6A',
    fontSize: 14,
  },
});

export default MiniatureCard;
