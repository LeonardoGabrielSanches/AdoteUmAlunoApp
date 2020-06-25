import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Button from '../../components/Button';
import styles from './styles';
import Input from '../../components/Input';
import {Api} from '../../service/api';

const Login: React.FC = (props: any) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  async function handleLogin() {
    const response = await new Api().login({
      username: userName,
      password: password,
    });
    setLoginError(response);
  }

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Informe seu usuário</Text>
      <Input value={userName} onChangeText={setUserName} width={'50'} />
      <Text style={styles.text}>Informe sua senha</Text>
      <Input value={password} onChangeText={setPassword} width={'50'} />
      <Text>{loginError}</Text>
      <Button title={'Logar'} onPress={handleLogin} width={100} />
    </View>
  );
};

export default Login;
