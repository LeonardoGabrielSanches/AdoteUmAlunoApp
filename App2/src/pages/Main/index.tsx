import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Api} from '../../service/api';

interface IUser {
  firstname: string;
  lastName: string;
  age: number;
  email: string;
  course: string;
  biography: string;
  id: number;
}

const Main: React.FC = (props: any) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers();
  });

  async function getUsers() {
    const dbUsers = await new Api().get('/user/andre24');
    setUsers(dbUsers);
    console.log(users);
  }

  return (
    <View>
      <Text>Nova tela</Text>
      {users.map((user) => {
        return <Text>{user.firstname}</Text>;
      })}
    </View>
  );
};

export default Main;
