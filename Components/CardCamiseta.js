import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export default function CardCamiseta() {
  const [imagenProducto, setImagenProducto] = useState(
    "https://d22fxaf9t8d39k.cloudfront.net/47a5210bee122e1abaa5bb8740461fc99d92e88d9defd311e7edd89240a4f51c249041.png"
  );

  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.nombreProducto}>Boca Jrs. Titular</Text>

      <View style={styles.containerImagen}>
        <Image
          style={styles.imagenProducto}
          source={{
            uri: imagenProducto,
          }}
        />
      </View>

      <Text style={styles.subtitulo}>América</Text>

      <View style={styles.tipoCamiseta}>
        <Text style={styles.tag}>Alternativa</Text>
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
