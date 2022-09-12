import React, { Component } from "react";
// api
import youtube from "./api/youtube";

// components
import Header from "./Components/Header/Header";
import Search from "./Components/SearchEngine/Search";
import VideoList from "./Components/Video/videolist";
import VideoDetails from "./Components/Video/videoDetails";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };


  componentDidMount(){
    this.onTermSubmit('AMEN ERITREAN ORTHODOX')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // console.log(response.data.items)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <Header />
        <Search onFormSubmit={this.onTermSubmit} />

        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
