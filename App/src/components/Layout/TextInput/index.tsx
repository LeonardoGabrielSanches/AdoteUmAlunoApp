import React from 'react'

import { TextInput } from 'react-native-gesture-handler'
import { styles } from './styles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface ITextInput {
  value:string
  setValue:(value : string)=>void
  placeholder? : string
  secureTextEntry? : boolean
  keyboardType? : string | undefined
  multiline?: boolean
}

const StyledTextInput = (
  {
    value,
    setValue,
    placeholder = '',
    secureTextEntry = false,
    keyboardType = 'default',
    multiline = false
  }:ITextInput) =>
  (
    <TextInput
      style={[styles.textInput, multiline ? { height: hp('6%') } : {}]}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      keyboardType={keyboardType}
      multiline={multiline}
    />
  )

export default StyledTextInput
