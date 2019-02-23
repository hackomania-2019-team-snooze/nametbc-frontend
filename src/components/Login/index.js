import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title="HOME"
          onPress={() => {
            navigate("App");
          }}
        />
        <Button
          title="Video"
          onPress={() => {
            navigate("WatchVideo");
          }}
        />
      </View>
    );
  }
}
