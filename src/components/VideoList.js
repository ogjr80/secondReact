import React, {Component} from 'react';
import VideoListItem from './VideoListItem';



class VideoList extends Component{
  constructor(props){
    super(props)

    this.state = {
      people : []
    }
    this.fetchData();
  }

   fetchData(){
    fetch("http://localhost:8000/people")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        people: json
      });
    });
  }


  render(){
    const videolistdata = this.state.people.map(person => {
      return <VideoListItem key={person.name} name={person.name} description={person.description}/>
    })

    return(
      <ul>
          {videolistdata}
      </ul>
    )
  }
}


export default VideoList;
