import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

export default function App() {
  return (
    <LinearGradient colors={["#E4E5E6", "#00416A"]} style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>RN To Do</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"New To Do.."} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff9fb",
    alignItems: "center"
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    marginTop: 80,
    fontWeight: "600",
    marginBottom: 30
  },
  card: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: width - 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  }
});
