import React, { Component } from "react";
import { TextInput, View, Button } from "react-native";
import { connect } from "react-redux";

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
        <TextInput
          placeholder="username"
          onChangeText={text => this.setState({ ...this.state, user: text })}
          value={this.state.user}
        />
        <Button
          title="Log In"
          onPress={() => {
            this.handleSubmit(navigate);
          }}
        />
        <Button
          title="VideoList"
          onPress={() => {
            navigate("VideoList");
          }}
        />
        <Button
          title="Record Voice"
          onPress={() => {
            navigate("RecordVoice");
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
