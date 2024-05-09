import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//Pages
import Home from "../Pages/Home";
import Productos from "../Pages/Productos";
import Camiseta from "../Pages/Camiseta";
import { NavigationContainer } from "@react-navigation/native";
import Carga from "../Pages/Carga";

import { Ionicons } from "@expo/vector-icons"; // Importa los iconos de Ionicons

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProductosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Productos"
        component={Productos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camiseta"
        component={Camiseta}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#FC2F00" }}>
      <Tab.Screen
        name="Resumen"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camisetas"
        component={ProductosStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shirt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carga"
        component={Carga}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud-upload" size={size} color={color} />
          ), 
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;
