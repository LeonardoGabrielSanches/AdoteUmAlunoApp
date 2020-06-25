import React, {useState} from 'react';
import {Text, View} from 'react-native';

import NewButton from '../../components/Button';
import styles from './styles';
import Input from '../../components/Input';
import {Api} from '../../service/api';

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  async function handleLogin() {
    const response = await new Api().login({
      username: userName,
      password: password,
    });

    if (!response) {
      setLoginError('Usuário e/ou senha inválido(s)');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Usuário</Text>
        <Input value={userName} onChangeText={setUserName} />
        <Text style={styles.text}>Senha</Text>
        <Input value={password} onChangeText={setPassword} />
        <Text>{loginError}</Text>
        <NewButton title={'Logar'} onPress={handleLogin} primary={true} />
        <View style={styles.newUserView}>
          <Text>Não tem uma conta?</Text>
          <Text
            style={styles.newUserText}
            onPress={() => {
              setLoginError('2');
            }}>
            Clique aqui
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
