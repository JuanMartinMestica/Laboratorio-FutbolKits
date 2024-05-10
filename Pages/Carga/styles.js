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
  label: {
    fontSize: 14,
    marginVertical: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
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
  exitoFoto: {
    textAlign: "center",
    color: "#afafaf",
    fontWeight: "800",
  },
});
