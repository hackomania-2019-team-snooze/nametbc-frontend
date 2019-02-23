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
import { Player, Recorder, MediaStates } from "react-native-audio-toolkit";
import Video from "react-native-video";
import Sound from "react-native-sound";
import Styles from "./Styles";

Sound.setCategory("Playback");

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
        onEnd={this.stopRecording}
        style={
          this.state.orientation === "PORTRAIT"
            ? Styles.portraitVideo
            : Styles.landscapeVideo
        }
      />
    );
  };

  renderRecordButton = rec => {
    if (!this.state.isRecording) {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#00A000",
            flex: 0.06,
            justifyContent: "center"
          }}
          onPress={() => this.startRecording(rec)}
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
          onPress={() => this.stopRecording(rec)}
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

  renderPlayBackButton = () => {
    if (!!this.state.audioFile) {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.06,
            justifyContent: "center"
          }}
          onPress={this.playBackAudio}
        >
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: 14,
              textAlign: "center",
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            PLAYBACK AUDIO
          </Text>
        </TouchableOpacity>
      );
    }
  };

  playBackAudio = () => {
    const recordedVoice = new Sound("./lol.wav", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
    });

    console.log("playing ", this.state.audioFile);

    recordedVoice.play(success => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
      }
    });
  };

  startRecording = rec1 => {
    this.player.seek(0);
    console.log("start record", rec);
    this.setState({ audioFile: "", isRecording: true, isPaused: false });
    let rec = new Recorder("filename.mp4").record();

    // Stop recording after approximately 3 seconds
    setTimeout(() => {
      rec.stop(err => {
        // NOTE: In a real situation, handle possible errors here

        // Play the file after recording has stopped
        new Player("filename.mp4").play().on("ended", () => {
          // Enable button again after playback finishes
          console.log("ended");
        });
      });
    }, 3000);
    // rec.record();
    // setTimeout(() => {
    //   rec.stop(err => {
    //     console.log("stop");
    //     new Player("filename.mp4").play().on("ended", () => {});
    //   });
    // }, 3000);
  };

  stopRecording = async rec => {
    this.setState({ isRecording: false, isPaused: true });
    rec.stop(err => {
      console.log("stop", err);
      new Player("filename.mp4").play().on("ended", () => {});
    });
    const player = new Player("filename.mp4");
    player.play();
  };

  render() {
    const { openDrawer, navigate } = this.props.navigation;
    let rec = new Recorder("filename.mp4");

    if (this.state.orientation === "PORTRAIT") {
      return (
        <View
          style={{
            flexDirection: "column",
            flex: 1
          }}
        >
          <View style={{ flex: 0.8 }}>{this.renderVideo()}</View>

          {this.renderRecordButton(rec)}
          {this.renderPlayBackButton()}
        </View>
      );
    } else {
      return this.renderVideo();
    }
  }
}
