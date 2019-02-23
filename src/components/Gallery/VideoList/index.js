import React, { Component } from "react";
import { Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class VideoList extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          name: "test",
          url: "https://youtu.be/wbwMPElKWco",
          text: "this is a test text"
        }
      ]
    };
    this.generateList = this.generateList.bind(this);
  }
  componentDidMount() {
    fetch(`/user/${this.props.store.user}/history`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ ...this.state, videos: res });
      })
      .catch(res => {
        console.log(res);
        // remove this when the fetch works
      });
  }
  generateList(navigate) {
    if (this.state.videos !== null) {
      return this.props.store.myVideos.map(ele => {
        return (
          <TouchableOpacity
            key={ele.name}
            onPress={() => {
              navigate("Video", { video: ele });
            }}
          >
            <View style={styles.ListItem}>
              <Text style={styles.Text}>{ele.name}</Text>
            </View>
          </TouchableOpacity>
        );
      });
    } else {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
  render() {
    const { navigate, openDrawer } = this.props.navigation;
    return (
      <View style={styles.Main}>
        <Text>Video List</Text>
        <Button
          title="Open Drawer"
          onPress={() => {
            openDrawer();
          }}
        />
        <Button
          title="navigate"
          onPress={() => {
            navigate("Video");
          }}
        />
        <ScrollView style={styles.List}>
          {this.generateList(navigate)}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    store: state
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return{
//     redux: (key, data) => {
//       if(key === 1){
//         dispatch({type: "ADD_USER"})
//       }
//     }
//   }
// }
export default connect(mapStateToProps)(VideoList);
