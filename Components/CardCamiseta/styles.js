import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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