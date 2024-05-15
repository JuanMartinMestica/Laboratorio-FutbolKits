import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    paddingTop: 50,
    paddingBottom: 120,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 90,
  },
  titulo: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 22,
    marginTop: 10,
  },
  subtitulo: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: 8,
  },
  formularioContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  containerImagen: {
    marginTop: 10,
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
  exitoFoto: {
    textAlign: "center",
    color: "#afafaf",
    fontWeight: "800",
  }, 
  botonCarga: {
    backgroundColor: "#ff6600",
    padding: 10,
    borderRadius: 20,
    marginTop: 20
  },
  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
});
