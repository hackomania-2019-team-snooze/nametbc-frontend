import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import Video from "react-native-video";
import Styles from "./Styles";

class VideoComponent extends Component {
  onBuffer = () => {
    return;
  };

  onError = () => {
    return;
  };

  renderVideo = () => {
    return (
      <Video
        source={require("./crash.mp4")}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        controls={true}
        style={Styles.portraitVideo}
      />
    );
  };

  render() {
    const { openDrawer, navigate } = this.props.navigation;

    return (
      <View
        style={{
          flexDirection: "column"
        }}
      >
        <View style={{ flex: 1 }}>{this.renderVideo()}</View>
        <View
          style={{
            flexDirection: "row",
            flex: 100
          }}
        />
        <TouchableOpacity>
          <Text>Like</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default VideoComponent;
