import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.textHeader}>Adote um aluno</Text>
  </View>
);

export default Header;
