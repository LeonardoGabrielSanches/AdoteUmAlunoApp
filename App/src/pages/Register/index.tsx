import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Input from '../../components/Input';
import NewButton from '../../components/Button';
import {Api} from '../../service/api';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [biography, setBiography] = useState<string>(''); //Tem que ser maior
  const [phone, setPhone] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleRegisterButton() {
    const objectParam = {
      name: name,
      lastName: lastname,
      age: +age,
      email: email,
      course: course,
      biography: biography,
      phone: phone,
      username: username,
      password: password,
    };
    console.log(objectParam);
    const response = await new Api().createUser(objectParam);
    console.log(response); //Rever a camada da api e também ver de fazer um modal padrão de erro
  }

  return (
    <View>
      <Text style={styles.title}>Realize seu cadastro</Text>
      <View style={styles.container}>
        <Input placeholder={'Nome'} value={name} onChangeText={setName} />
        <Input
          placeholder={'Último nome'}
          value={lastname}
          onChangeText={setLastname}
        />
        <Input
          placeholder={'Idade'}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <Input placeholder={'Email'} value={email} onChangeText={setEmail} />
        <Input placeholder={'Telefone'} value={phone} onChangeText={setPhone} />
        <Input placeholder={'Curso'} value={course} onChangeText={setCourse} />
        <Input
          placeholder={'Biografia'}
          value={biography}
          onChangeText={setBiography}
        />
        <Input
          placeholder={'Nome de usuário'}
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder={'Senha'}
          value={password}
          onChangeText={setPassword}
        />
        <NewButton
          title={'Cadastrar'}
          onPress={handleRegisterButton}
          primary={true}
        />
      </View>
    </View>
  );
};

export default Register;
