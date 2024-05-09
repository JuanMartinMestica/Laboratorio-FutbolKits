import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Constants/Constants";
import { styles } from "./styles";

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


