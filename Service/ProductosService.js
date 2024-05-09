import axios from "axios";
import { API_URL } from "../Constants/Constants";

export const obtenerProductos = async (page, limit, selectedContinente) => {
  try {
    const response = await axios.get(
      `${API_URL}/?limit=${limit}&page=${page}${selectedContinente}`
    );

    console.log(`${API_URL}/?limit=${limit}&page=${page}${selectedContinente}`)

    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};
