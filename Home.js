import { Button, PaperProvider, Card } from "react-native-paper";
import { styles } from "./styles";
import { Image, View } from "react-native";
import { theme } from "./theme";

export function Home({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.containerForCards}>
        <Card style={styles.card}>
          <Card.Cover
            style={styles.cardImage}
            source={require("./assets/counter.png")}
          />
          <Button
            mode="text"
            style={styles.buttonNavigate}
            labelStyle={styles.textInButtonNavigate}
            onPress={() => navigation.navigate("Counter")}
          >
            Счетчик
          </Button>
        </Card>
        <Card style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("./assets/calc.png")}
          />
          <Button
            mode="text"
            style={styles.buttonNavigate}
            labelStyle={styles.textInButtonNavigate}
            onPress={() => navigation.navigate("Yarn density calculator")}
          >
            Калькулятор
          </Button>
        </Card>
      </View>
    </PaperProvider>
  );
}
