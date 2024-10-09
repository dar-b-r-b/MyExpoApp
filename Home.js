import { Button, PaperProvider, Card } from "react-native-paper";
import { styles } from "./styles";
import { View } from "react-native";

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
            style={styles.buttonGoToCounter}
            onPress={() => navigation.navigate("Counter")}
          >
            Счетчик
          </Button>
        )}
      />
      <View style={styles.containerButtonAddCounter}>
        <Button
          icon="plus"
          mode="contained"
          style={styles.buttonAddCounter}
          labelStyle={styles.icon}
          contentStyle={styles.iconButtonContent}
          onPress={() => alert("Скоро здесь будет фича")}
        ></Button>
      </View>
    </PaperProvider>
  );
}
