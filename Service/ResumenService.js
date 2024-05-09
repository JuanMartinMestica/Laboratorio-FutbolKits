import axios from "axios";
import { API_URL } from "../Constants/Constants";

export const obtenerResumen = async () => {
  try {
    const response = await axios.get(`${API_URL}/resumen`);
    const data = response.data;

    // Se construye el resumen en un solo objeto en lugar de array para mostrar en los componentes
    const resumen = data.reduce((resumenApp, item) => {
      resumenApp[item.continente] = parseInt(item.cantidad);
      return resumenApp;
    }, {});

    return resumen;
  } catch (error) {
    console.error("Error al obtener el resumen:", error);
    throw error;
  }
};
