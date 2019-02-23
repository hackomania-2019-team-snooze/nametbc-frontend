import React, { Component } from "react";
import { Text, View } from "react-native";
import { configureStore } from "../../store";
import { Provider } from "react-redux";

const store = configureStore();

export default class Home extends Component {
  render() {
    return (
      <Provider>
        <View>
          <Text> textInComponent </Text>
        </View>
      </Provider>
    );
  }
}
