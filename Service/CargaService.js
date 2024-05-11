import axios from "axios";
import { API_URL } from "../Constants/Constants";

export const cargarCamiseta = async (datosCamiseta) => {
  let success = false;
  

  console.log(datosCamiseta)
  try {
    // Realizo la solicitud POST al endpoint
    const response = await axios.post(`${API_URL}`, datosCamiseta);

    // Verificar el código de estado de la respuesta
    if (response.status === 200) {

      success = true;
      console.log("Camiseta cargada exitosamente:", response.data);

    } else {
      console.error("Error al cargar la camiseta:", response.statusText);
    }

  } catch (error) {
    console.error("Error al cargar camiseta:", error);
    throw error;
  }

  return success;
};
