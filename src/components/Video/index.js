import React, { Component } from "react";
import { Text, View, Button, SectionList } from "react-native";
import Orientation from "react-native-orientation";
import Video from "react-native-video";
import Styles from "./Styles";

class VideoComponent extends Component {
  state = {
    orientation: "PORTRAIT"
  };
  onBuffer = () => {
    return;
  };

  onError = () => {
    return;
  };

  renderVideo = () => {
    Orientation.getOrientation((err, orientation) => {
      this.setState({ orientation: orientation });
    });
    return (
      <Video
        source={require("./crash.mp4")}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        controls={true}
        style={
          this.state.orientation === "PORTRAIT"
            ? Styles.portraitVideo
            : Styles.landscapeVideo
        }
      />
    );
  };

  render() {
    const { openDrawer, navigate } = this.props.navigation;

    if (this.state.orientation === "PORTRAIT") {
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
    } else {
      return this.renderVideo();
    }
  }
}

export default VideoComponent;
