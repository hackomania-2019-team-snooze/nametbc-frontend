import React, { Component } from 'react'
import { Text, View, Button, SectionList } from "react-native";
import { connect } from 'react-redux'
import Orientation from "react-native-orientation";
import Video from "react-native-video";
import Styles from "./Styles";
import List from './List'

class VideoComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      video: null,
      orientation: "PORTRAIT",
      galleryType: 'personal'
    }
    this.renderVideo = this.renderVideo.bind(this)
    this.generateBar = this.generateBar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleVideoChange = this.handleVideoChange.bind(this)
  }
  componentDidMount(){
    this.setState({...this.state, video: this.props.navigation.getParam('video', null)})
    console.log(this.props.navigation.getParam('video', null))
  }
  onBuffer(){
    return;
  };
  onError(){
    return;
  };
  handleVideoChange(object){
    this.setState({...this.state, video: object})
  }
  handleChange(type){
    let username = this.props.store.username
    console.log(type)
    switch (type) {
      case 'like':
        console.log('like')
        if(this.state.video.likes.includes(username)){
          this.state.video.likes.splice(this.state.video.likes.indexOf(username), 1)
        }else{
          this.state.video.likes.push(username)
        }
        break;
      case 'dislike':
        console.log('dislike')
        if(this.state.video.dislikes.includes(username)){
          this.state.video.dislikes.splice(this.state.video.dislikes.indexOf(username), 1)
        }else{
          this.state.video.dislikes.push(username)
        }
        break;
      default:
        break;
    }
  }
  generateBar(){
    if(this.state.video !== null){
      return(
        <View>
          <Text>{this.state.video.name}     User:{this.state.video.username}     Likes:{this.state.video.likes.length}</Text>
        </View>
      )
    }else{
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
  }

  renderVideo(){
    Orientation.getOrientation((err, orientation) => {
      this.setState({ orientation: orientation });
    });
    if(this.state.video !== null){
      return (
        <Video
          source={{uri: this.state.video.url}}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          controls={true}
          style={
            this.state.orientation === "PORTRAIT"
              ? Styles.portraitVideo
              : Styles.landscapeVideo
          }
        />
      );
    }else{
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    
  };

  render() {
    const { openDrawer, navigate } = this.props.navigation;
    if (this.state.orientation === "PORTRAIT") {
      return (
        <View
          style={{
            flexDirection: "column",
            flex: 1
          }}
        >
          <View style={{ flex: 0.5 }}>{this.renderVideo()}</View>
          <View>
            { this.generateBar() }
          </View>
          {/* Like and Dislike Buttons */}
          <View
            style={{
              flex: 0.06,
              flexDirection: "row",
              alignContent: "stretch"
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Button 
                title={"Like"} 
                onPress={()=>{this.handleChange('like')}}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <Button 
                title={"Dislike"} 
                onPress={()=>{this.handleChange('dislike')}}
              />
            </View>
          </View>

          <View>
            <List handleVideoChange={this.handleVideoChange} />
          </View>
        </View>
      );
    } else {
      return this.renderVideo();
    }
  }
}
const mapStateToProps = (state) => {
  return{
    store: state
  }
}

export default connect(mapStateToProps)(VideoComponent)