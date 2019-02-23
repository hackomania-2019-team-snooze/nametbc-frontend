import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  SectionList
} from "react-native";
import Orientation from "react-native-orientation";
import Video from "react-native-video";
import Styles from "./Styles";
import { bold } from "ansi-colors";

export default class RecordVoice extends Component {
  state = {
    orientation: "PORTRAIT",
    isRecording: false
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
        source={{
          uri:
            "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4"
        }}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        style={
          this.state.orientation === "PORTRAIT"
            ? Styles.portraitVideo
            : Styles.landscapeVideo
        }
      />
    );
  };

  renderRecordButton = () => {
    if (!this.state.isRecording) {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#00A000",
            flex: 0.06,
            justifyContent: "center"
          }}
          onPress={this.startRecording}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              textAlign: "center",
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            START RECORDING
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#FF0000",
            flex: 0.06,
            justifyContent: "center"
          }}
          onPress={this.stopRecording}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              textAlign: "center",
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            STOP RECORDING
          </Text>
        </TouchableOpacity>
      );
    }
  };

  startRecording = () => {
    this.setState({ isRecording: true });
  };

  stopRecording = () => {
    this.setState({ isRecording: false });
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

          {this.renderRecordButton()}
        </View>
      );
    } else {
      return this.renderVideo();
    }
  }
}
