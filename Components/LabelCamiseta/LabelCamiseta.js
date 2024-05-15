import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";


export default function LabelCamiseta ({nombre, value}) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{nombre}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

