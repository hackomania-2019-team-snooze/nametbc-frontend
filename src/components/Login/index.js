import React, { Component } from 'react'
import { 
  Text,
  View,
  Button,
  TextInput 
} from 'react-native'

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text> Login </Text>
        <TextInput 
          placeholder="Email"
        />
        <TextInput 
          placeholder="Password"
        />
        <Button 
          title="Home"
          onPress={()=>{navigate("Home")}} 
        />
      </View>
    )
  }
}
