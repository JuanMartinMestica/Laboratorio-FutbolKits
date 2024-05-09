import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';


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

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical:10
  },
  nombreProducto: {
    fontWeight: "300",
    textAlign: "center",
    fontSize: 17,
    marginTop: 20,
  },
  tipoCamiseta: {
    backgroundColor: "#5bb531",
    position: "absolute",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  tag: {
    color: "white",
    fontWeight: "700",
    padding: 3,
  },
  containerImagen: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignContent: "center",
  },
  imagenProducto: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "200"
  }
});
