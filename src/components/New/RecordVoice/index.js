import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class index extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> RecordVoice </Text>
        <Button
          title="stop recording"
          onPress={() => {
            // navigate("TextEditor");
            this.props.navigation.navigate("TextEditor", {
              transcribe: "transcribe from RecordVideo to TextEdit"
            });
          }}
        />
      </View>
    );
  }
}
