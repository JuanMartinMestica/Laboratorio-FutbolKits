import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from "./styles";


export default function CustomTextInput({label, valueState, onChangeText, placeholder}) {
  return (
   <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          value={valueState}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType="default"
          autoCapitalize="words"
        />
    </View> 
  )
}