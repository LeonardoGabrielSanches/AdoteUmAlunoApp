import React, {useState} from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

type NewInputProps = {
  label?: string;
  placeholder?: string | undefined;
  type?: string;
  keyboardType?: 'default' | 'numeric';
  value: string;
  editable?: boolean;
  onChangeText?: (e: any) => void;
  onChange?: (e: any) => void;
  autoFocus?: boolean;
  onBlur?: (e: any) => void;
  maxLength?: number;
};

export default function Input({
  placeholder,
  type,
  keyboardType,
  value,
  editable = true,
  onChangeText,
  onChange,
  autoFocus,
  onBlur,
  maxLength = 254,
}: NewInputProps) {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      autoFocus={autoFocus}
      style={
        focused
          ? [styles.genericContainer, styles.genericContainerFocused]
          : [styles.genericContainer]
      }
      placeholder={placeholder}
      secureTextEntry={type === 'password'}
      keyboardType={!keyboardType ? 'default' : keyboardType}
      value={value.substring(0, maxLength)}
      editable={editable}
      onChangeText={onChangeText}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (onBlur) {
          onBlur(e);
        }
        setFocused(false);
      }}
    />
  );
}
