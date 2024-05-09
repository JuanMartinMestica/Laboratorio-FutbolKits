import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";



export default function CardCamiseta({ nombreProducto, imagenUrl, subtitulo, tipoCamiseta }) {

  const navigation = useNavigation();

  //Cuando se presiona en el componente, se abre la page "Camiseta" y se le pasa id como parámetro
  const handlePressProducto = () => {
      navigation.navigate('Camiseta', {nombreProducto: nombreProducto});
  }


  return (
    <TouchableOpacity style={styles.card} onPress={handlePressProducto}>
      <Text style={styles.nombreProducto}>{nombreProducto}</Text>

      <View style={styles.containerImagen}>
        <Image
          style={styles.imagenProducto}
          source={{
            uri: imagenUrl,
          }}
        />
      </View>

      <Text style={styles.subtitulo}>{subtitulo}</Text>

      <View style={styles.tipoCamiseta}>
        <Text style={styles.tag}>{tipoCamiseta}</Text>
      </View>
    </TouchableOpacity>
  );
}


