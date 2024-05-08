import React from "react";
import { Text, View, StyleSheet} from "react-native";
import CardCamiseta from "../Components/CardCamiseta";

const Productos = () => {
  return (
    <View style={styles.area}>
      <Text style={styles.tituloSeccion}>Catálogo de Camisetas</Text>
      <CardCamiseta />
    </View>
  );
};

export default Productos;


const styles = StyleSheet.create({
  area: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  tituloSeccion:{
    textAlign: "center",
    margin: 20,
    fontWeight: "400",
    fontSize: 20
  }
});