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
const RootStack = createAppContainer(AppNavigator);

// WRAPPING ROOT STACK NAVIGATOR WITH PROVIDER (REDUX STORE)
import React, { Component } from "react";
import { Provider } from "react-redux";
import rootReducer from "./store";
import { createStore } from "redux";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
