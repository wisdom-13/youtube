import React from 'react';

const Video = (props) => {
  console.log(props.video.snippet);
  return (
    <div>
      <h3>{props.video.snippet.title}</h3>
    </div>
  );
}

export default Video;