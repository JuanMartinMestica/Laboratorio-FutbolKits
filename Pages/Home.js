import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import NumberCard from "../Components/NumberCard";
import background from "../assets/backhome.jpg";

import { API_URL } from "../Constants/Constants";
import axios from "axios";

const Home = () => {
  {
    /* ============================Lógica====================================== */
  }

  const [resumen, setResumen] = useState(null);

  const obtenerResumen = async () => {
    try {
      const response = await axios.get(`${API_URL}/resumen`);
      const data = response.data;

      // Se construye el resumen en un solo objeto en lugar de array para mostrar en los componentes
      const resumen = data.reduce((resumenApp, item) => {
        resumenApp[item.continente] = parseInt(item.cantidad);

        return resumenApp;
      }, {});

      setResumen(resumen);

    } catch (error) {

      console.error("Error al llamar al endpoint:", error);
      
    }
  };

  useEffect(() => {
    obtenerResumen();
  }, []);

  {
    /* ============================Componente====================================== */
  }

  return (
    <ImageBackground source={background} style={styles.area}>
      <Text style={[styles.title, styles.main]}>Fútbol Kits</Text>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Resumen de la plataforma</Text>
      <View style={styles.cardsContainer}>


        {/* Total */}
        <NumberCard number={resumen && resumen.Total}  title="Total Camisetas" />

        {/* Primera Fila */}
        <View style={styles.row}>
          <NumberCard number={resumen && resumen.América} title="America" />
        </View>

        {/* Segunda Fila */}
        <View style={styles.row}>
          <NumberCard number={resumen && resumen.Europa}  title="Europa" />
          <NumberCard number={resumen && resumen.Asia}  title="Asia" />
        </View>

        {/* Tercera Fila */}
        <View style={styles.row}>
          <NumberCard number={resumen && resumen.África}  title="Africa" />
          <NumberCard number={resumen && resumen.Oceanía}  title="Oceanía" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 10,
    color: "white",
  },
  main: {
    fontWeight: 900,
  },
  cardsContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "white",
  },
  row: {
    flexDirection: "row",
  },
});

export default Home;
