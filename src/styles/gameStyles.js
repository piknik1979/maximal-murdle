import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { colors } from "../constants";

const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  title: {
    paddingTop: getStatusBarHeight(),
    color: colors.grey,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },
  resetButton: {
    height: 40,
    width: 80,
    backgroundColor: colors.darkgrey,
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 5,
  },

  resetText: { color: colors.lightgrey, textAlign: "center" },

  map: {
    alignSelf: "stretch",
    marginVertical: 20,
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  cell: {
    borderWidth: 3,
    borderColor: colors.grey,
    flex: 1,
    maxWidth: 70,
    aspectRatio: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: colors.grey,
    fontWeight: "bold",
    fontSize: 28,
  },
});

export default gameStyles;
