import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { cargarCamiseta } from "../../Service/CargaService";
import {
  CAMISETA_PLACEHOLDER,
  OPCIONES_CONTINENTES,
  OPCIONES_TIPO,
} from "../../Constants/Constants";
import { Picker } from "@react-native-picker/picker";
import CustomTextInput from "../../Components/TextInput/CustomTextInput";
import CustomSelectInput from "../../Components/CustomSelectInput/CustomSelectInput";


export default function Carga() {
  //Datos de entrada
  const [nombre, setNombre] = useState("");
  const [temporada, setTemporada] = useState("");
  const [link_foto, setlink_foto] = useState("");
  const [continente, setContinente] = useState("");
  const [equipo, setEquipo] = useState("");
  const [liga, setLiga] = useState("");
  const [tipo, setTipo] = useState("");

  //Previsualización de imagen
  const [previsualizacion, setPrevisualizacion] =
    useState(CAMISETA_PLACEHOLDER);
  const [exitoFoto, setExitoFoto] = useState(false);

  const handlePrevisualizacion = async (link) => {
    setlink_foto(link);

    try {
      const response = await fetch(link);

      // Para actualizar la previsualización, primero se verifica que se haya podido obtener una imagen correctamente
      if (
        response.ok &&
        response.headers.get("content-type").startsWith("image")
      ) {
        // Si es una imagen válida, actualiza el estado
        setPrevisualizacion(link);
        setExitoFoto(true);
      }
    } catch (err) {
      setPrevisualizacion(CAMISETA_PLACEHOLDER);
    }
  };


  const validarDatos = () => {

    let validacion = true;

    if (!nombre || !temporada || !link_foto || !continente || !equipo || !liga || !tipo) {
      validacion = false;
    }

    return validacion;
  };

  const submitCamiseta = async () => {

    try {

      if(validarDatos()) {

        // Se envían los datos al service para poder cargar la camiseta
        const success = await cargarCamiseta({
          nombre,
          temporada,
          link_foto,
          continente,
          equipo,
          liga,
          tipo,
        });

        // Se limpia el formulario después de cargar la camiseta
        setNombre("");
        setTemporada("");
        setlink_foto("");
        setContinente("");
        setEquipo("");
        setLiga("");
        setTipo("");
        setExitoFoto(false);
        setPrevisualizacion(CAMISETA_PLACEHOLDER);


        //Feedback para el usuario
        success? Alert.alert("Éxito", "La camiseta se ha cargado correctamente"): Alert.alert("Error", "La camiseta no se pudo cargar correctamente")

        
      } else {
        
        Alert.alert("Error", "Por favor complete todos los campos");

      }

  
    } catch (err) {

      console.log(err)
      Alert.alert("Error", "Ocurrió un error, no se pudo cargar la camiseta")

    }

  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.titulo}>Cargar nueva camiseta</Text>
      <Text style={styles.subtitulo}>
        Completá los datos para cargar una nueva camiseta
      </Text>

      <View style={styles.formularioContainer}>


        {/* Input para nombre */}
        <CustomTextInput label="Nombre" placeholder="Ingrese el nombre de la camiseta" valueState={nombre} onChangeText={setNombre}/>

        {/* Input para temporada */}
        <CustomTextInput label="Temporada" placeholder="Ingrese la temporada" valueState={temporada} onChangeText={setTemporada}/>

        {/* Input para link de foto */}
        <CustomTextInput label="Foto" placeholder="Ingrese el link de la foto" valueState={link_foto} onChangeText={handlePrevisualizacion}/>

        {/* Previsualización */}
        <View style={styles.containerImagen}>
          <Image
            style={styles.imagenProducto}
            source={{
              uri: previsualizacion,
            }}
          />
        </View>
        <Text style={styles.exitoFoto}>
          {!exitoFoto ? "No se encontró una foto" : null}
        </Text>

        {/* Continente */}
        <CustomSelectInput label="Continente" selectedValue={continente}  onValueChange={setContinente} options={OPCIONES_CONTINENTES}/>


        {/* Equipo */}
        <CustomTextInput label="Equipo" placeholder="Ingrese el nombre del equipo" valueState={equipo} onChangeText={setEquipo}/>

        {/* Liga */}
        <CustomTextInput label="Liga" placeholder="Ingrese la liga" valueState={liga} onChangeText={setLiga}/>
        

        {/* Tipo */}
        <CustomSelectInput label="Tipo" selectedValue={tipo}  onValueChange={setTipo} options={OPCIONES_TIPO}/>

        {/* Botón  */}
        <TouchableOpacity style={styles.botonCarga} onPress={submitCamiseta}>
          <Text style={styles.textoBoton}>Cargar Camiseta</Text>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
  );
}
