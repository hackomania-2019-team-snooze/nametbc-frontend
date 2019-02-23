import React, { Component } from "react";
import { Text, View, Button, SectionList } from "react-native";
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
          flexDirection: "column",
          flex: 1
        }}
      >
        <View style={{ flex: 0.5 }}>{this.renderVideo()}</View>
        <View
          style={{
            flex: 0.06,
            flexDirection: "row",
            alignContent: "stretch"
          }}
        >
          <View style={{ flex: 0.5 }}>
            <Button title={"Like"} />
          </View>
          <View style={{ flex: 0.5 }}>
            <Button title={"Dislike"} />
          </View>
        </View>
      </View>
    );
  }
}

export default VideoComponent;
