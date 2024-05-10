import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import NumberCard from "../../Components/NumberCard/NumberCard";
import background from "../../assets/backhome.jpg";
import { styles } from "./styles";
import { obtenerResumen } from "../../Service/ResumenService";

const Home = () => {
  {
    /* ============================Lógica====================================== */
  }

  const [resumen, setResumen] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const data = await obtenerResumen();
        setResumen(data);

      } catch (error) {

        console.log(error);
        console.log("Error al obtener el resumen con Service")

      }
    };
    fetchData()
  }, []);

  {
    /* ============================Componente====================================== */
  }

  return (
    <ImageBackground source={background} style={styles.area}>
      <Text style={[styles.title, styles.main]}>Fútbol Kits</Text>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Resumen de la plataforma</Text>
      <View style={styles.cardsContainer}>


        {/* Total */}
        <NumberCard number={resumen && resumen.Total}  title="Total Camisetas" />

        {/* Primera Fila */}
        <View style={styles.row}>
          <NumberCard number={resumen && resumen.America} title="America" />
        </View>

        {/* Segunda Fila */}
        <View style={styles.row}>
          <NumberCard number={resumen && resumen.Europa}  title="Europa" />
          <NumberCard number={resumen && resumen.Asia}  title="Asia" />
        </View>

        {/* Tercera Fila */}
        <View style={styles.row}>
          <NumberCard number={resumen && resumen.Africa}  title="Africa" />
          <NumberCard number={resumen && resumen.Oceania}  title="Oceanía" />
        </View>
      </View>
    </ImageBackground>
  );
};



export default Home;
