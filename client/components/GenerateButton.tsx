import React, { useState } from 'react';
import { Text, Pressable, View, Alert, StyleSheet, Animated } from 'react-native';
import { button, textColors } from '../constants/Colors';
import { buttonText } from '../constants/FontSize';

const GenerateButton: React.FC = () => {
  const [scaleValue] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    // Return button to original size
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const onClick = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <View style={{ margin: 6 }}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: '#FF6B6B', color: 'white' },
          ]}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={onClick}
        >
          <Text style={styles.text}>Generate</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: button.bgColor,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: button.borderColor, 
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  text: {
    color: textColors.primary,
    fontSize: buttonText,
    fontFamily: 'Roboto',
    fontWeight: '900', 
  },
});

export default GenerateButton;
