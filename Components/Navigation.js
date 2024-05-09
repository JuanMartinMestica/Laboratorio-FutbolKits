  import React from "react";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import { createStackNavigator } from "@react-navigation/stack";

  //Pages
  import Home from "../Pages/Home";
  import Productos from "../Pages/Productos";
  import Camiseta from "../Pages/Camiseta";
  import { NavigationContainer } from "@react-navigation/native";
  import Carga from "../Pages/Carga";

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator(); 

  function ProductosStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Productos" component={Productos} options={{headerShown: false}} />
        <Stack.Screen name="Camiseta" component={Camiseta} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{tabBarActiveTintColor: "#FC2F00"}}>
        <Tab.Screen name="Home" component={Home}  options={{headerShown: false}}  />
        <Tab.Screen name="Camisetas" component={ProductosStack} options={{headerShown: false}} />
        <Tab.Screen name="Carga" component={Carga} options={{headerShown: false}} />
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
