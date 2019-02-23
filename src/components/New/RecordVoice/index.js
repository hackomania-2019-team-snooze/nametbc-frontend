import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  SectionList
} from "react-native";
import Permissions from "react-native-permissions";
import Orientation from "react-native-orientation";
import Video from "react-native-video";
import AudioRecord from "react-native-audio-record";
import Styles from "./Styles";

export default class RecordVoice extends Component {
  state = {
    orientation: "PORTRAIT",
    isRecording: false,
    isPaused: false,
    audioFile: ""
  };
  onBuffer = () => {
    return;
  };

  onError = () => {
    return;
  };

  async componentDidMount() {
    await this.checkPermission();

    const options = {
      sampleRate: 16000,
      channels: 1,
      bitsPerSample: 16,
      wavFile: "test.wav"
    };

    AudioRecord.init(options);
  }

  checkPermission = async () => {
    const p = await Permissions.check("microphone");
    console.log("permission check", p);
    if (p === "authorized") return;
    return this.requestPermission();
  };

  requestPermission = async () => {
    const p = await Permissions.request("microphone");
    console.log("permission request", p);
  };

  renderVideo = () => {
    Orientation.getOrientation((err, orientation) => {
      this.setState({ orientation: orientation });
    });
    return (
      <Video
        source={require("./rabbit.mp4")}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        ref={ref => {
          this.player = ref;
        }}
        paused={this.state.isPaused}
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
    this.player.seek(0);
    console.log("start record");
    this.setState({ audioFile: "", isRecording: true });
    AudioRecord.start();
  };

  stopRecording = async () => {
    let audioFile = await AudioRecord.stop();
    console.log("audioFile", audioFile);
    this.setState({ isRecording: false, isPaused: true });
    // wait till file is saved, else react-native-video will load incomplete file
    setTimeout(() => {
      this.setState({ audioFile });
    }, 1000);
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
          <View style={{ flex: 0.8 }}>{this.renderVideo()}</View>

          {this.renderRecordButton()}
        </View>
      );
    } else {
      return this.renderVideo();
    }
  }
}
