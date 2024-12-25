import React, { useState } from "react";
import { View, StyleSheet, Alert } from 'react-native'
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
    Alert.alert('Form cleared')
  }

  const goBack = () => {
    router.back();
  }
  // TODO: UI for the topbox
  // TODO: UI for the form
  // TODO: clearForm functionality
  // TODO: submitForm functionality
  return(
    <View style={{marginTop: 40}}>
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
  topbox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  form: {

  }, 
  icon: {
    padding: 8
  }
})

export default Form;