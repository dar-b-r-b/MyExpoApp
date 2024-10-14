import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //Counter.js
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    flexDirection: "row",

    marginBottom: 20,
  },
  textCount: {
    fontSize: 128,
    marginBottom: 20,
  },
  icon: {
    fontSize: 64,
  },
  textMessage: {
    marginBottom: 30,
    fontSize: 32,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    marginLeft: 20,
    marginRight: 20,
  },
  resetButton: {
    marginBottom: 20,
    width: 270,
  },

  //Home.js

  iconButtonContent: {
    marginLeft: 15,
  },
  card: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  buttonGoToCounter: {
    marginRight: 20,
  },
  buttonAddCounter: {
    borderRadius: 100,
    height: 90,
    width: 90,
  },

  //DensityCalc.js
  containerForButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  containerForInputs: {
    flexDirection: "row",
    marginTop: 10,
  },
  label: {
    fontSize: 25,
    marginLeft: 20,
    marginTop: 30,
  },
  input: {
    marginLeft: 20,
    width: 120,
  },
  buttonCalc: {
    marginTop: 30,
    width: 240,
  },
  textInButton: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
});
