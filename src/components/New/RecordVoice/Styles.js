import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    alignItems: "flex-start"
  },
  portraitVideo: {
    flex: 1,
    alignSelf: "stretch"
  },
  landscapeVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
