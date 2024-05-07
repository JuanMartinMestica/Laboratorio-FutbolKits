import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NumberCard({title, number}) {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{number}</Text>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#dbdbdb",
        padding: 20,
        width: "50%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical:  10
      },
      number: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#333",
      },
});