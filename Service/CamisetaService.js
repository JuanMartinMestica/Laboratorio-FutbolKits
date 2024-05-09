// CamisetaService.js
import axios from "axios";
import { API_URL } from "../Constants/Constants";

export const obtenerDetalleCamiseta = async (nombreProducto) => {
  try {
    const response = await axios.get(`${API_URL}/?nombre=${nombreProducto}`);
    return response.data[0];
  } catch (error) {
    console.error("Error al obtener la camiseta:", error);
    throw error;
  }
};
