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
import Login from './components/Login/index'
import Home from './components/New/DailyVids/index'


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  App: {
    screen: createDrawerNavigator({
      Home: Home
    })
  }
});

export default createAppContainer(AppNavigator);