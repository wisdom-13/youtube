import React from 'react';

const Video = (props) => {
  const data = props.video.snippet;
  return (
    <div>
      <h3>{data.title}</h3>
      <img src={data.thumbnails.default.url}></img>
    </div>
  );
}

export default Video;