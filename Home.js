import { Button, PaperProvider, Card } from "react-native-paper";
import { styles } from "./styles";
import { View } from "react-native";

export function Home({ navigation }) {
  return (
    <PaperProvider>
      <Card.Title
        title="Counter"
        titleVariant="headlineSmall"
        subtitle="Card Subtitle"
        style={styles.card}
        right={() => (
          <Button
            mode="contained"
            style={styles.buttonGoToCounter}
            onPress={() => navigation.navigate("Counter")}
          >
            Счетчик
          </Button>
        )}
      />
      <Card.Title
        title="Calc"
        titleVariant="headlineSmall"
        subtitle="Card Subtitle"
        style={styles.card}
        right={() => (
          <Button
            mode="contained"
            style={styles.buttonGoToCounter}
            onPress={() => navigation.navigate("Yarn density calculator")}
          >
            Калькулятор
          </Button>
        )}
      />
    </PaperProvider>
  );
}
