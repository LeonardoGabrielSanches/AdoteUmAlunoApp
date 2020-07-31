import React, { useState } from 'react'
import { View, Button, Text, Alert } from 'react-native'
import { styles } from './styles'
import StyledTextInput from '../../components/Layout/TextInput'
import RoutesNames from '../../routes/routesNames'

const Login = (props : any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleLogin () {
    // Não vai ser essa lógica
    if (!username) { Alert.alert('Usuário não informado'); return }

    if (!password) { Alert.alert('Senha não informada') }
  }

  function handleNewUser () { props.navigation.navigate(RoutesNames.register) }

  return (
    <View style={styles.container}>
      <View style={styles.registerContainer}>
        <View style={styles.styledInput}>
          <StyledTextInput value={username} setValue={setUsername} placeholder={'Usuário'}/>
        </View>
        <View style={styles.styledInput}>
          <StyledTextInput value={password} setValue={setPassword} placeholder={'Senha'} secureTextEntry={true}/>
        </View>
        <Button onPress={handleLogin} title={'Entrar'}></Button>
        <View style={styles.noAccountView}>
          <Text>Ainda não possui cadastro?</Text>
          <Button onPress={handleNewUser} title={'Clique aqui'}/>
        </View>
      </View>
    </View>
  )
}

export default Login
