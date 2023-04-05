import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import MenuScreen from "./src/screens/MenuScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CartScreen from "./src/screens/CartScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommnityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#02C3D9",
        }}>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommnityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommnityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommnityIcons
                name="cart-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommnityIcons name="menu" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
