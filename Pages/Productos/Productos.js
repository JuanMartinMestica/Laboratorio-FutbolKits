import React, { useEffect, useState } from "react";
import { Text, View, FlatList} from "react-native";
import { Picker } from "@react-native-picker/picker"; 
import CardCamiseta from "../../Components/CardCamiseta/CardCamiseta";
import { obtenerProductos } from "../../Service/ProductosService";


import { styles } from "./styles";


const Productos = () => {


  //========================================================= Estados =========================================================

  //Productos que vienen de la API
  const [productos, setProductos] = useState([]);

  //Estado de Carga
  const [isLoading, setIsLoading] = useState(false);

  //Paginado desde la página 1, con 5 elementos
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  //Estado para agregar a la url la selección del continente, inicialmente vacío para obtener todos
  const [selectedContinente, setSelectedContinente] = useState('&');


  //========================================================= Llamado al endpoint =========================================================
  const obtenerProductosPaginado = async () => {

    setIsLoading(true);
    try {

      //Consumo de productos llamando al service
      const data = await obtenerProductos(page, limit, selectedContinente);

      //Cada llamado a la API se agregan 5 productos al estado de productos
      setProductos((prevProductos) => [...prevProductos, ...data]);

      //Se incrementa la página para traer más productos de la API
      setPage(page + 1);


    } catch (error) {

      console.error("Error al llamar al utilizar el service:", error);

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

    obtenerProductosPaginado();
     
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
        <Picker.Item label="América" value="&continente=America" />
        <Picker.Item label="Europa" value="&continente=Europa" />
        <Picker.Item label="Asia" value="&continente=Asia" />
        <Picker.Item label="África" value="&continente=Africa" />
        <Picker.Item label="Oceanía" value="&continente=Oceania" />        
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
        onEndReached={obtenerProductosPaginado}
      //Umbral 0.1, es decir cuando se tiene 10% de los productos, se carga más 
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default Productos;
