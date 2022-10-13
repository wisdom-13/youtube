import React from 'react';
import styles from '../videoDetail/videoDetail.module.css';


const VideoDetail = ({ video, video: { snippet } }) => {

  const src = "https://www.youtube.com/embed/" + video.id;

  return (
    <>
      <iframe type="text/html" width="720" height="405" src={src}
        frameborder="0" allowfullscreen></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <p>{snippet.description}</p>
    </>
  );


}
export default VideoDetail;