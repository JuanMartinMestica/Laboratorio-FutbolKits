import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList} from "react-native";
import { Picker } from "@react-native-picker/picker"; 
import CardCamiseta from "../Components/CardCamiseta";
import axios from "axios";
import { API_URL } from "../Constants/Constants";

const Productos = () => {


  //========================================================= Estados =========================================================

  //Productos que vienen de la API
  const [productos, setProductos] = useState([]);

  //Estado de Carga
  const [isLoading, setIsLoading] = useState(false);

  //Paginado desde la página 1, con 5 elementos
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  //Estado para agregar a la url la selección del continente, inicialmente vacío para no filtrar por todos
  const [selectedContinente, setSelectedContinente] = useState('&');



  //========================================================= Llamado al endpoint =========================================================
  const obtenerProductos = async () => {

    setIsLoading(true);
    try {

      console.log(`${API_URL}/?limit=${limit}&page=${page}${selectedContinente}`)

      //Consumo de productos desde la API
      const response = await axios.get(`${API_URL}/?limit=${limit}&page=${page}${selectedContinente}`);

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


  //========================================================= Selección de continente =========================================================
  const handleContinenteChange = (continente) => {

    //Restauro a la página uno para no perder resultados en la nueva consulta
    setPage(1); 

    //Se limpia la lista de productos
    setProductos([]); 

   //Seteo el continente seleccionado
    setSelectedContinente(continente);

  };

  //Carga inicial de los productos  
  useEffect(() => {

    obtenerProductos();
     
  }, [selectedContinente]);


  //========================================================= Componente =========================================================

  return (
    <View style={styles.area}>
      <Text style={styles.tituloSeccion}>Catálogo de Camisetas</Text>


      {/* Filtro para seleccionar un continente en particular */}
      <Picker
        selectedValue={selectedContinente}
        onValueChange={(itemValue) => handleContinenteChange(itemValue)}
      >
        <Picker.Item label="Todos" value="&" />
        <Picker.Item label="América" value="&continente=América" />
        <Picker.Item label="Europa" value="&continente=Europa" />
        <Picker.Item label="Asia" value="&continente=Asia" />
        <Picker.Item label="África" value="&continente=África" />
        <Picker.Item label="Oceanía" value="&continente=Oceanía" />        
      </Picker>


      {/* Scroll Infinito */}
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
      //Umbral 0.1, es decir cuando se tiene 10% de los productos, se carga más 
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
