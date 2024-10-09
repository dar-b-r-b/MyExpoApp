import { Button, PaperProvider, Card } from "react-native-paper";
import { styles } from "./styles";

export function Home({ navigation }) {
  return (
    <PaperProvider>
      <Card.Title
        title="Card Title"
        titleVariant="headlineSmall"
        subtitle="Card Subtitle"
        style={styles.card}
        right={(props) => (
          <Button
            mode="contained"
            style={styles.buttonCounter}
            onPress={() => navigation.navigate("Counter")}
          >
            Счетчик
          </Button>
        )}
      />
    </PaperProvider>
  );
}
