import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    paddingTop: getStatusBarHeight(),
    color: "grey",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },
  resetButton: {
    height: 40,
    width: 80,
    backgroundColor: "#3A3A3D",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 5,
  },

  resetText: { color: "#D7DADC", textAlign: "center" },

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
    borderColor: "grey",
    flex: 1,
    maxWidth: 70,
    aspectRatio: 1,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 28,
  },
});

export default gameStyles;
