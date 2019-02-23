import React, { Component } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "lorem huehue" };
  }
  componentDidMount() {
    this.setState({ text: this.props.navigation.getParam("transcribe") });
  }
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const transcribe2 = navigation.getParam("transcribe", "some default value");
    // var transcribe2 = new String(
    //   "" + navigation.getParam("transcribe", "some default value") + ""
    // ).toString;
    return (
      <View>
        <TextInput
          {...transcribe2} // inherit any props passed to it
          editable={true}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Cancel"
          onPress={() => {
            navigate("RecordVoice");
          }}
        />
        <Button
          title="Publish"
          onPress={() => {
            navigate("Gallery");
          }}
        />
      </View>
    );
  }
}
