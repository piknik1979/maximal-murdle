import { StyleSheet, Dimensions } from "react-native";
import { keys } from "../constants";

const screenWidth = Dimensions.get("window").width;
const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;

const keyboardStyles = StyleSheet.create({
  keyboard: {
    alignSelf: "stretch",
    marginTop: "auto",
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  key: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    borderRadius: 5,
    backgroundColor: "#818384",
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: "#D7DADC",
    fontWeight: "bold",
  },
});

export { keyboardStyles, keyWidth };
