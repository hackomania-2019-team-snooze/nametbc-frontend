import React, { Component } from "react";
import { TextInput, View, Button } from "react-native";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(navigate) {
    fetch("/login", {
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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
          placeholder="username"
          onChangeText={text => this.setState({ ...this.state, user: text })}
          value={this.state.user}
        />
        <Button
          title="HOME"
          onPress={() => {
            this.handleSubmit(navigate);
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
