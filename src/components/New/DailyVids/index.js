import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import Toast from "react-native-easy-toast";
import { ListItem } from "react-native-elements";
// import { configureStore } from "../../../store";
// import { Provider } from "react-redux";

// const store = configureStore();
const list = [
  {
    name: "iguana vs snakes singapore",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "subtitle 1"
  },
  {
    name: "funniest ah lian salesperson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "subtitle 2"
  }
];
class DailyVids extends Component {
  componentDidMount() {
    console.log(this.props.store);
  }
  render() {
    const { openDrawer, navigate } = this.props.navigation;
    return (
      <View>
        <Text> DAILY VIDS </Text>
        <Button
          title="open"
          onPress={() => {
            openDrawer();
          }}
        />
        <Toast ref="toast" />
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            onPress={() => {
              navigate("RecordVoice");
              // this.refs.toast.show(l.name);
            }}
          />
        ))}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStateToProps)(DailyVids);
