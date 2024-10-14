import { useState } from "react";
import { styles } from "./styles";
import { View } from "react-native";
import { PaperProvider, TextInput, Text, Button } from "react-native-paper";

export function DensityCalc() {
  const [yarns, setYarns] = useState([
    { id: 1, name: `Нить 1`, length: 0, weight: 0 },
    { id: 2, name: `Нить 2`, length: 0, weight: 0 },
  ]);

  const _calcDensity = ([
    { weight: weight1, length: length1 },
    { weight: weight2, length: length2 },
  ]) => {
    let coef1 = 100 / weight1;
    let coef2 = 100 / weight2;

    return Math.ceil(
      (length1 * coef1 * length2 * coef2) / (length1 * coef1 + length2 * coef2)
    );
  };
  return (
    <PaperProvider>
      {yarns.map((y) => {
        return (
          <>
            <Text style={styles.label}>{y.name}</Text>
            <View style={styles.containerForInputs}>
              <TextInput
                style={styles.input}
                label="м"
                keyboardType="numeric"
                value={y.length}
                onChangeText={(text) => {
                  y.length = +text;
                  setYarns([...yarns]);
                }}
                mode="outlined"
              />

              <TextInput
                style={styles.input}
                label="гр"
                keyboardType="numeric"
                value={y.weight}
                onChangeText={(text) => {
                  y.weight = +text;
                  setYarns([...yarns]);
                }}
                mode="outlined"
              />
            </View>
          </>
        );
      })}

      <View style={styles.containerForButton}>
        <Button
          style={styles.buttonCalc}
          labelStyle={styles.textInButton}
          mode="contained"
          onPress={() => console.log(_calcDensity(yarns))}
        >
          Расчитать
        </Button>
      </View>
    </PaperProvider>
  );
}
