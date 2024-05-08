import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import CardCamiseta from "../Components/CardCamiseta";
import axios from "axios";
import { API_URL } from "../Constants/Constants";

const Productos = () => {

  //Productos que vienen de la API
  const [productos, setProductos] = useState([]);

  //Estado de Carga
  const [isLoading, setIsLoading] = useState(false);

  //Paginado desde la página 1
  const [page, setPage] = useState(1);

  const obtenerProductos = async () => {

    setIsLoading(true);
    try {

      //Consumo de productos desde la API
      const response = await axios.get(`${API_URL}/?limit=5&page=${page}`);

      //Cada llamado a la API se agregan 5 productos al estado de productos
      setProductos(prevProductos => [...prevProductos, ...response.data]);
      //Se incrementa la página para traer más productos de la API
      setPage(page + 1);


    } catch (error) {
      console.error("Error al llamar al endpoint:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //Carga inicial de los productos
  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <View style={styles.area}>
      <Text style={styles.tituloSeccion}>Catálogo de Camisetas</Text>

      <FlatList
        data={productos}
        renderItem={({ item, index }) => (
          <CardCamiseta
            key={index}
            nombreProducto={item.nombre}
            imagenUrl={item.link_foto}
            subtitulo={item.continente}
            tipoCamiseta={item.tipo}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        //Cuando se llega al final se incrementa la página y por ende, se traen 5 productos más
        onEndReached={obtenerProductos}
        onEndReachedThreshold={0.1}
      />
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
  tituloSeccion: {
    textAlign: "center",
    margin: 20,
    fontWeight: "400",
    fontSize: 20,
  },
});
