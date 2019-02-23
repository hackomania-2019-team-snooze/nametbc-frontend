import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    alignItems: "flex-start"
  },
  portraitVideo: {
    width: 350,
    height: 350,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignSelf: "flex-start"
  },
  landscapeVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
