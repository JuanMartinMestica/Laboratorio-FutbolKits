import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { obtenerDetalleCamiseta } from "../../Service/CamisetaService";

export default function Camiseta({ route }) {
  const [datosCamiseta, setDatosCamiseta] = useState({});

  //Acceso al nombre de producto a través de "route"
  const nombreProducto = route.params.nombreProducto;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerDetalleCamiseta(nombreProducto);
        setDatosCamiseta(data);
      } catch (error) {
        console.log(error)
        console.log("Error al obtener información con Service");
      }
    };
    fetchData();
  }, [nombreProducto]);

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
