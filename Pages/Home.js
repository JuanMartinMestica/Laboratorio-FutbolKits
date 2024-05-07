import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import NumberCard from "../Components/NumberCard";
import background from "../assets/backhome.jpg";

const Home = () => {
  return (
    <ImageBackground source={background} style={styles.area}>
      <Text style={[styles.title, styles.main]}>Fútbol Kits</Text>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Resumen de la plataforma</Text>
      <View style={styles.cardsContainer}>
        <NumberCard number={52} title="Total Productos" />
        <NumberCard number={0} title="Favoritos" />
        <NumberCard number={12} title="Kits" />
        <NumberCard number={40} title="Camisetas" />
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
    fontWeight:900
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
});

export default Home;
