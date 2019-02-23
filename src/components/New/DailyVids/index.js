import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from 'react-redux'
// import { configureStore } from "../../../store";
// import { Provider } from "react-redux";

// const store = configureStore();

class DailyVids extends Component {

  componentDidMount(){
    console.log(this.props.store)
  }
  render() {
    const { openDrawer, navigate } = this.props.navigation
    return (
        <View>
          <Text> DAILY VIDS </Text>
          <Button
            title="open"
            onPress={()=>{openDrawer()}}
          />
        </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    store: state
  }
}
export default connect(mapStateToProps)(DailyVids)