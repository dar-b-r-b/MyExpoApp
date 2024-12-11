import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Counter } from "./Counter";
import { Home } from "./Home";
import { Tools } from "./Tools";
import { Yarns } from "./Yarns";
import { DensityCalc } from "./DensityCalc";
import { theme } from "./theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen
            name="Yarn density calculator"
            component={DensityCalc}
          />
          <Stack.Screen name="Tools" component={Tools}></Stack.Screen>
          <Stack.Screen name="Yarns" component={Yarns}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
