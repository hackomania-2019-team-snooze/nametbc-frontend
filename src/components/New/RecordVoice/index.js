import React, { Component } from "react";
import { TouchableHighlight, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Player, Recorder, MediaStates } from "react-native-audio-toolkit";
import { PermissionsAndroid } from "react-native";

async function checkPermission() {
  if (Platform.OS !== "android") {
    return Promise.resolve(true);
  }

  let result;
  try {
    result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Microphone Permission",
        message:
          "Enter the Gunbook needs access to your microphone so you can search with voice."
      }
    );
  } catch (error) {
    console.error("failed getting permission, result:", result);
  }
  console.log("permission result:", result);
  return result === true || result === PermissionsAndroid.RESULTS.GRANTED;
}

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.RECORD_AUDIO,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  // Recording.init({
  //   bufferSize: 4096,
  //   sampleRate: 44100,
  //   bitsPerChannel: 16,
  //   channelsPerFrame: 1
  // });
  // Recording.addRecordingEventListener(data => console.log(data));
  // Recording.start();

  onPress() {
    // Disable button while recording and playing back
    this.setState({ disabled: true });

    // Start recording
    let rec = new Recorder("filename.mp4").record();

    // Stop recording after approximately 3 seconds
    setTimeout(() => {
      rec.stop(err => {
        // NOTE: In a real situation, handle possible errors here

        // Play the file after recording has stopped
        new Player("filename.mp4").play().on("ended", () => {
          // Enable button again after playback finishes
          this.setState({ disabled: false });
        });
      });
    }, 3000);
  }
  render() {
    // requestCameraPermission();
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> RecordVoice </Text>

        <TouchableHighlight
          disabled={this.state.disabled}
          onPress={
            () => this.onPress()
            // this.checkPermission()
          }
        >
          <Text>Press me!</Text>
        </TouchableHighlight>

        <Button
          title="stop recording"
          onPress={() => {
            checkPermission();
            // navigate("TextEditor");
            // this.props.navigation.navigate("TextEditor", {
            //   transcribe: "transcribe from RecordVideo to TextEdit"
            // });
          }}
        />
      </View>
    );
  }
}
