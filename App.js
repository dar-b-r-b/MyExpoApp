import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="+"
      ></Button>
      <Button
        onPress={() => {
          setCount(count - 1);
        }}
        title="-"
      ></Button>
      <Button
        onPress={() => {
          setCount(0);
        }}
        title="Сбросить"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
