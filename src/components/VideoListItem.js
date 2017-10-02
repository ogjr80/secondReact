import React, {Component} from 'react';


class VideoListItem extends Component{
  render(){
    return (
        <li>
          <a>{this.props.name}</a>
          <p>{this.props.description}</p> 
        </li>
    )
  }
}

export default VideoListItem;
