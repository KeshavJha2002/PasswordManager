import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

// Props for InputSet component
type InputSetProp = {
  label: string,
  placeholder: string,
  value: string,
  onChange: (value: string) => void,
}

const InputSet: React.FC<InputSetProp> = ({ label, placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return(
    <View style={styles.container}>
      <Text style={[styles.label, isFocused && styles.labelFocused]}>{label}</Text>
      <View style={[styles.inputBox, isFocused && styles.inputBoxFocused]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          placeholderTextColor="#A0A0A0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {value && (
          <Icon 
            name="close" 
            size={22} 
            color="#9e9e9e" 
            style={styles.icon} 
            onPress={() => onChange('')} 
          />
        )}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333333',
  },
  labelFocused: {
    color: '#A35D6A', // Highlighted label color
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A35D6A',
    borderRadius: 8,
    backgroundColor: '#FFE3E3', // Light pink background
  },
  inputBoxFocused: {
    borderColor: '#FF7F7F', // Highlight border on focus
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333333',
  },
  icon: {
    padding: 8,
  }
});

export default InputSet;
