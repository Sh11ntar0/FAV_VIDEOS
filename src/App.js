import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Youtube from './components/Youtube';
import History from './components/History'

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class App extends React.Component {
  state = {
    videos: [],
  }

  onSerchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;

    axios
      .get(url)
      .then(response => {
          this.setState({
            videos: response.data.items,
          });
      })
      .catch(() => {
          console.log('It dose not work');
      });
  }

  render() {
    
    return (
      <>
        <Header onSerchYoutube={this.onSerchYoutube} />
        {/* 追加 */}
        <Youtube videos={this.state.videos}/>
        <History videos={this.state.videos}/>
      </>
    )
  }
}