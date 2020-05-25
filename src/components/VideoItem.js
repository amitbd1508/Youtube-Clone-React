import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12} onClick={() => onVideoSelect(video)}>
      <Paper style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ marginRight: "20px" }}
          alt="thamnil"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
