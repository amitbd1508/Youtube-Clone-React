import React, { Component } from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList } from "./components";

import youtube from "./api/youtube";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSumbit = async (SearchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDZMXWgKw5Ht_fP8KjhQhU6ab4vX_so3Tg",
        q: SearchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });

    console.log(this.state);
  };

  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing="10">
            <Grid item xs="12">
              <SearchBar onFormSubmit={this.handleSumbit} />
            </Grid>
            <Grid item xs="8">
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs="4">
              <VideoList
                videos={videos}
                onVideoSelect={this.handleVideoSelect}
              ></VideoList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
