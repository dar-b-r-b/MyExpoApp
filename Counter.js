import { useState } from "react";
import { View } from "react-native";
import { PaperProvider, Button, Text } from "react-native-paper";
import { styles } from "./styles";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="displaySmall" style={styles.textMessage}>
          Сообщение
        </Text>
        <Text style={styles.textCount}>{count}</Text>

        <View style={styles.containerButton}>
          <Button
            icon="plus"
            mode="contained"
            style={styles.button}
            labelStyle={styles.icon}
            contentStyle={styles.iconButtonContent}
            onPress={() => setCount(count + 1)}
          ></Button>
          <Button
            icon="minus"
            mode="contained"
            style={styles.button}
            labelStyle={styles.icon}
            contentStyle={styles.iconButtonContent}
            onPress={() => setCount(count - 1)}
          ></Button>
        </View>
        <Button
          mode="contained"
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          Сброс
        </Button>
        <Button mode="contained" onPress={() => setCount(0)}>
          Задать новый интервал
        </Button>
      </View>
    </PaperProvider>
  );
}
