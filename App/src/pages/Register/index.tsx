import React, { useState } from 'react'
import { View, Button, KeyboardAvoidingView, Platform } from 'react-native'
import StyledTextInput from '../../components/Layout/TextInput'
import { styles } from './styles'

const Register = (props : any) => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [course, setCourse] = useState<string>('')// Um modal picker talvez?
  const [biography, setBiography] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.registerContainer}>
        <View style={styles.styledInput}>
          <StyledTextInput value={name} setValue={setName} placeholder={'Nome'}/>
        </View>
        <View style={styles.styledInput}>
          <StyledTextInput value={age} setValue={setAge} placeholder={'Idade'} keyboardType={'numeric'}/>
        </View>
        <View style={styles.styledInput}>
          <StyledTextInput value={email} setValue={setEmail} placeholder={'Email'} keyboardType={'email-address'} />
        </View>
        <View style={styles.styledInput}>
          <StyledTextInput value={course} setValue={setCourse} placeholder={'Curso'} />
        </View>
        <View style={styles.styledInput}>
          <StyledTextInput value={username} setValue={setUsername} placeholder={'Usuario'} />
        </View>
        <View style={styles.styledInput}>
          <StyledTextInput value={password} setValue={setPassword} placeholder={'Senha'} secureTextEntry keyboardType={'visible-password'}/>
        </View>
        <View style={styles.styledInput}>
          <StyledTextInput value={'FAZER O POSSIVEL PRA SCROLLAR'} setValue={setBiography} placeholder={'Biografia'} multiline />
        </View>
        <Button onPress={() => {}} title={'Cadastrar'}/>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Register
