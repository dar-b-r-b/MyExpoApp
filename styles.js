import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //container
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  containerButtonAddCounter: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  //content
  textCount: {
    fontSize: 128,
    marginBottom: 20,
  },

  icon: {
    fontSize: 64,
  },
  iconArrowBack: {
    fontSize: 32,
  },
  textMessage: {
    marginBottom: 30,
    fontSize: 32,
  },
  iconButtonContent: {
    marginLeft: 15,
  },
  card: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  //button
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
    width: 200,
  },
  buttonGoToCounter: {
    marginRight: 20,
  },
  buttonAddCounter: {
    borderRadius: 100,
    height: 90,
    width: 90,
  },
});
