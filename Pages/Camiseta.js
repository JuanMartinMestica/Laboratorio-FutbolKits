import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../Constants/Constants";

export default function Camiseta({ route }) {
  const [datosCamiseta, setDatosCamiseta] = useState({});

  //Acceso al nombre de producto a través de "route"
  const nombreProducto = route.params.nombreProducto;

  const obtenerDetalleCamiseta = async () => {
    //Consumo de productos desde la API
    const response = await axios.get(`${API_URL}/?nombre=${nombreProducto}`);

    setDatosCamiseta(response.data[0]);
  };

  useEffect(() => {
    obtenerDetalleCamiseta();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.camisetaConainer}>
        {/* Imagen */}
        <View style={styles.containerImagen}>
          <Image
            style={styles.imagenProducto}
            source={{
              uri: datosCamiseta.link_foto,
            }}
          />
        </View>
      </View>

      {/* Datos de la camiseta */}
      <Text style={styles.nombreProducto}>{datosCamiseta.nombre}</Text>

      <Text style={styles.tag}>{datosCamiseta.continente}</Text>

      <View style={styles.datos}>
        <View style={styles.row}>
          <Text style={styles.label}>Equipo:</Text>
          <Text style={styles.value}>{datosCamiseta.equipo}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Liga:</Text>
          <Text style={styles.value}>{datosCamiseta.liga}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Temporada:</Text>
          <Text style={styles.value}>{datosCamiseta.temporada}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tipo:</Text>
          <Text style={styles.value}>{datosCamiseta.tipo}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  camisetaConainer: {
    backgroundColor: "#fff",
    paddingTop: 30,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    shadowColor: "#111",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 2,
  },
  containerImagen: {
    width: "100%",
    height: 550,
    justifyContent: "center",
    alignContent: "center",
  },
  imagenProducto: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  nombreProducto: {
    margin: 10,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
  },
  tag: {
    fontSize: 17,
    fontWeight: "600",
    backgroundColor: "#ff3381",
    color: "white",
    textAlign: "center",
    width: "40%",
    borderRadius: 24,
    alignSelf: "center",
  },
  datos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "500",
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "300"
  }
});
