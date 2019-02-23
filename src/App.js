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
import RecordVoice from './components/New/RecordVoice/index'
import TextEditor from './components/New/TextEdit/index'
import VideoList from './components/Gallery/VideoList/index'
import Video from './components/Gallery/Video/index'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  App: createDrawerNavigator({
    New: createStackNavigator({
      DailyVids: DailyVids,
      RecordVoice: RecordVoice,
      TextEditor: TextEditor
    }),
    Gallery: createStackNavigator({
      VideoList: VideoList,
      Video: Video
    })
  })
});

export default createAppContainer(AppNavigator);
