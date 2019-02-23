/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

// import files
import Login from "./components/Login/index";
import DailyVids from "./components/New/DailyVids/index";
import RecordVoice from "./components/New/RecordVoice/index";
import TextEditor from "./components/New/TextEdit/index";
import VideoList from "./components/Gallery/VideoList/index";
import Video from "./components/Gallery/Video/index";
import VideoComponent from "./components/Video";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    App: createDrawerNavigator({
      New: createStackNavigator(
        {
          DailyVids: DailyVids,
          RecordVoice: RecordVoice,
          TextEditor: TextEditor
        },
        {
          headerMode: "none",
          navigationOptions: {
            headerVisible: false
          }
        }
      ),
      Gallery: createStackNavigator(
        {
          VideoList: VideoList,
          Video: Video
        },
        {
          headerMode: "none",
          navigationOptions: {
            headerVisible: false
          }
        }
      )
    }),
    Video: createStackNavigator(
      {
        WatchVideo: VideoComponent
      },
      {
        headerMode: "none",
        navigationOptions: {
          headerVisible: false
        }
      }
    )
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
