import React, { Component } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "lorem huehue" };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const transcribe = navigation.getParam("transcribe", "some default value");
    return (
      <View>
        <TextInput
          {...transcribe} // inherit any props passed to it
          editable={true}
          onChangeText={text => this.setState({ text })}
          value={transcribe}
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
