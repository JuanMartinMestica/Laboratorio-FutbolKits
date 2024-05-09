import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from "./styles";

export default function NumberCard({title, number}) {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{number}</Text>
      <Text>{title}</Text>
    </View>
  )
}

