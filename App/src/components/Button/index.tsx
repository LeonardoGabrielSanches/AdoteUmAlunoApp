import React from 'react';
import {Button as RNEButton} from 'react-native-elements';

import styles from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  primary?: boolean;
  width?: number;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  primary,
  disabled,
}: ButtonProps) => {
  return (
    <RNEButton
      title={title}
      type="outline"
      disabled={disabled}
      buttonStyle={[styles.button, primary ? styles.primary : styles.secondary]}
      titleStyle={[
        styles.title,
        primary ? styles.titlePrimary : styles.titleSecondary,
      ]}
      onPress={onPress}
    />
  );
};

export default Button;
