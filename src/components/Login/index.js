import React, { Component } from "react";
import { TextInput, View, Button } from "react-native";
import { connect } from "react-redux";
import { Input } from "react-native-elements";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(navigate) {
    console.log(this.props);
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
        this.props.redux(1, this.state.user);
        navigate("App");
      })
      .catch(res => {
        console.log(res);
        // remove this when the fetch works
        this.props.redux(1, this.state.user);
        navigate("App");

        this.setState({ ...this.state, user: "" });
      });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Input
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
        <Button
          title="VideoList"
          onPress={() => {
            navigate("VideoList");
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    store: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    redux: (key, data) => {
      if (key === 1) {
        dispatch({ type: "ADD_USER", data: data });
      }
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
