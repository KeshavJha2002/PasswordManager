import React, { useState } from "react";
import { View, StyleSheet, Alert, Image } from 'react-native'
import GenerateButton from "@/components/GenerateButton";
import InputSet from "@/components/InputSet";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const Form:React.FC = () => {
  const router = useRouter();
  const [ title, setTitle ] = useState('');
  const [ userId, setUserId ] = useState('');
  const [ password, setPassword ] = useState('');

  const queryList = [{
      label: 'Title',
      placeholder: 'Enter a title...',
      value: title,
      onChange: (value:string) => setTitle(value)
    },{
      label: 'User-Id/Login-Id',
      placeholder: 'Enter the user-id...',
      value: userId,
      onChange: (value:string) => setUserId(value)
    },{
      label: 'Password',
      placeholder: 'Enter the password...',
      value: password,
      onChange: (value:string) => setPassword(value)
    }
  ]

  const submitForm = () => {
    Alert.alert('Form submitted')
  }

  const clearForm = () => {
    setPassword('');
    setTitle('');
    setUserId('');
  }

  const goBack = () => {
    router.back();
  }
  // TODO: submitForm functionality
  return(
    <View style={{marginTop: 20}}>
      <Image source={require('@/assets/images/coverImage.png')} style={styles.coverImage} />
      <View style={styles.topbox}>
        <Icon name="arrow-back" size={22} color="#9e9e9e" style={styles.icon} onPress={goBack}/>
        <GenerateButton title='Clear' handleForm={clearForm}/>
      </View>
      <View style={styles.form}>
        {queryList.map((query, index) => {
          return (
            <InputSet 
              key={index}
              label={query.label} 
              placeholder={query.placeholder}
              value={query.value}
              onChange={query.onChange}
            />
          )
        })}
        <GenerateButton title='Generate' handleForm={submitForm}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  topbox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  form: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }, 
  icon: {
    padding: 8
  }
})

export default Form;
