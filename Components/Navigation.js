import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//Pages
import Home from "../Pages/Home";
import Productos from "../Pages/Productos";
import StackScreem from "../Pages/StackScreen";
import { NavigationContainer } from "@react-navigation/native";
import Favoritos from "../Pages/Favoritos";
import Carga from "../Pages/Carga";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: "#FC2F00"}}>
      <Tab.Screen name="Home" component={Home}  options={{headerShown: false}}  />
      <Tab.Screen name="Productos" component={Productos} options={{headerShown: false}} />
      <Tab.Screen name="Favoritos" component={Favoritos} options={{headerShown: false}} />
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
