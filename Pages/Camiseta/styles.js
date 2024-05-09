import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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