import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./components/welcome";
import Login from "./components/login";
import Home from "./pages/home";
import Filter from "./pages/filter";
import Search from "./pages/Search";
import PropertyPage from "./pages/property";
import Booknow from "./pages/booknow";
import Tour from "./pages/tour";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Property" component={PropertyPage} />
        <Stack.Screen name="Booknow" component={Booknow} />
        <Stack.Screen name="Tour" component={Tour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
