import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      bbb: ""
    };
  }
  componentDidMount() {
    fetch("/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ user: this.state.user })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        navigate("App");
      })
      .catch(res => {
        console.log(res);
        this.setState({ ...this.state, user: "" });
        // remove this when the fetch works
        navigate("App");
      });
  }
  render() {
    const { navigate, openDrawer } = this.props.navigation;
    return (
      <View>
        <Text>Video List</Text>
        <Button
          title="Open Drawer"
          onPress={() => {
            openDrawer();
          }}
        />
      </View>
    );
  }
}
