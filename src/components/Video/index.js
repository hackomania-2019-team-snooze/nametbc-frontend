import React, { Component } from "react";
import { Text, View } from "react-native";
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
        style={Styles.video}
      />
    );
  };

  render() {
    const { openDrawer, navigate } = this.props.navigation;

    return <View style={Styles.view}>{this.renderVideo()}</View>;
  }
}

export default VideoComponent;
