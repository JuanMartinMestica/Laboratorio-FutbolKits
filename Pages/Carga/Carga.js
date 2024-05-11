import {
  View,
  Text,
  TextInput,
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

  const submitCamiseta = async () => {

    try {

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
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={(texto) => {
            setNombre(texto);
          }}
          placeholder="Ingrese el nombre de la camiseta"
          keyboardType="default"
          autoCapitalize="words"
        />

        {/* Input para temporada */}
        <Text style={styles.label}>Temporada</Text>
        <TextInput
          style={styles.input}
          value={temporada}
          onChangeText={(texto) => {
            setTemporada(texto);
          }}
          placeholder="Ingrese la temporada"
          keyboardType="default"
          autoCapitalize="words"
        />

        {/* Input para link de foto */}
        <Text style={styles.label}>Foto</Text>
        <TextInput
          style={styles.input}
          value={link_foto}
          onChangeText={handlePrevisualizacion}
          placeholder="Ingrese el link de la foto"
          keyboardType="default"
          autoCapitalize="words"
        />

        {/* Previsualización */}
        <Text style={styles.label}>Previsualización foto</Text>
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
        <Text style={styles.label}>Continente</Text>
        <Picker
          selectedValue={continente}
          onValueChange={(itemValue) => setContinente(itemValue)}
          style={styles.input}
        >
          {OPCIONES_CONTINENTES.map((opcion, index) => (
            <Picker.Item
              key={index}
              label={opcion.label}
              value={opcion.value}
            />
          ))}
        </Picker>

        {/* Equipo */}
        <Text style={styles.label}>Equipo</Text>
        <TextInput
          style={styles.input}
          value={equipo}
          onChangeText={(valorEquipo) => {
            setEquipo(valorEquipo);
          }}
          placeholder="Ingrese el nombre del equipo"
          keyboardType="default"
          autoCapitalize="words"
        />

        {/* Liga */}
        <Text style={styles.label}>Liga</Text>
        <TextInput
          style={styles.input}
          value={liga}
          onChangeText={(valorLiga) => {
            setLiga(valorLiga);
          }}
          placeholder="Ingrese el nombre del equipo"
          keyboardType="default"
          autoCapitalize="words"
        />

        {/* Tipo */}
        <Text style={styles.label}>Tipo</Text>
        <Picker
          selectedValue={tipo}
          onValueChange={(itemValue) => setTipo(itemValue)}
          style={styles.input}
        >
          {OPCIONES_TIPO.map((opcion, index) => (
            <Picker.Item
              key={index}
              label={opcion.label}
              value={opcion.value}
            />
          ))}
        </Picker>

        {/* Botón  */}
        <TouchableOpacity style={styles.botonCarga} onPress={submitCamiseta}>
          <Text style={styles.textoBoton}>Cargar Camiseta</Text>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
  );
}
