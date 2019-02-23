import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      openDrawer: false
    }
  }
  render() {
    const {navigate, openDrawer} = this.props.navigation
    return (
      <View>
        <Text>Daily Vids</Text>
        <Button
          title="OPEN"
          onPress={()=>{openDrawer()}}
        />
      </View>
    )
  }
}
