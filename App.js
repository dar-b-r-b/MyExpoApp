import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { Counter } from "./Counter";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
