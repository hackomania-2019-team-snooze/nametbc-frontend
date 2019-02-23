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
import Home from './components/Home/index'


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});

export default createAppContainer(AppNavigator);