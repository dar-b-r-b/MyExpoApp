import { useState } from "react";
import { View } from "react-native";
import { PaperProvider, Button, Text } from "react-native-paper";
import { styles } from "./styles";
import { DialogWindow } from "./Dialog";

export function Counter() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [repeat, setRepeat] = useState(0);
  const [message, setMessage] = useState("");

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [values, setValues] = useState([]);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="displaySmall" style={styles.textMessage}>
          {values.includes(count) ? message : null}
        </Text>

        <Text style={styles.textCount}>{count}</Text>

        <View style={styles.containerButton}>
          <Button
            icon="minus"
            mode="contained"
            style={styles.button}
            labelStyle={styles.icon}
            contentStyle={styles.iconButtonContent}
            onPress={() => (count === 0 ? "disabled" : setCount(count - 1))}
          ></Button>
          <Button
            icon="plus"
            mode="contained"
            style={styles.button}
            labelStyle={styles.icon}
            contentStyle={styles.iconButtonContent}
            onPress={() => setCount(count + 1)}
          ></Button>
        </View>
        <Button
          mode="contained"
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          Сброс
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            showDialog();
            setCount(0);
          }}
        >
          Задать новый интервал
        </Button>
        <DialogWindow
          visible={visible}
          step={step}
          setStep={setStep}
          message={message}
          setMessage={setMessage}
          repeat={repeat}
          setRepeat={setRepeat}
          hideDialog={hideDialog}
          setValues={setValues}
        />
      </View>
    </PaperProvider>
  );
}
