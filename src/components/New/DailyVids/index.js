import React, { Component } from "react";
import { Text, View, Button } from "react-native";
// import { configureStore } from "../../../store";
// import { Provider } from "react-redux";

// const store = configureStore();

export default class DailyVids extends Component {
  render() {
    const { openDrawer, navigate } = this.props.navigation
    return (
        <View>
          <Text> DAILY VIDS </Text>
          <Button
            title="open"
            onPress={()=>{openDrawer()}}
          />
        </View>
    );
  }
}
