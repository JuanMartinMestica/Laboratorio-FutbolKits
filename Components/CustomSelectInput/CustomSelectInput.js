import { View, Text } from 'react-native'
import React from 'react'
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";



export default function CustomSelectInput({label, selectedValue, onValueChange, options}) {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.input}
        >
          {options.map((opcion, index) => (
            <Picker.Item
              key={index}
              label={opcion.label}
              value={opcion.value}
            />
          ))}
        </Picker>
    </View>
  )
}