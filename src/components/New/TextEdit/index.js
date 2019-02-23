import React, { Component } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

export default class index extends Component {
  render() {
    return (
      <View>
        <TextInput />
        <Button title="Cancel" />
        <Button title="Publish" />
        <Text> TextEdit </Text>
      </View>
    );
  }
}
