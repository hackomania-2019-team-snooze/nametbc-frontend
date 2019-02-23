import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            galleryType: 'personal'
        }
        this.generateList = this.generateList.bind(this)
    }
    componentDidMount(){
    }
    generateList(){
        if(this.state.galleryType === 'personal'){
            return this.props.store.myVideos.map( ele => {
                return(
                    <TouchableOpacity
                        key={ele.name}
                        onPress={()=>{this.props.handleVideoChange(ele)}}
                        style={{backgroundColor:'yellow'}}
                    >
                    <View>
                        <Text>{ele.name}</Text>
                        <Text>User:{ele.username}    Likes:{ele.likes.length}</Text>
                    </View>
                    </TouchableOpacity>
                )
            })
        }else {
            return this.props.store.videofeed.map( ele => {
                return(
                    <View>
                        <Text>{ele.name}</Text>
                        <Text>User:{ele.username}    Likes:{ele.likes.length}</Text>
                    </View>
                )
            })
        }
        
    }
  render() {
    return (
      <View>
          { this.generateList() }
      </View>
    )
  }
}
const mapStateToProps = (state) => {
    return{
        store: state
    }
}
export default connect(mapStateToProps)(List)
