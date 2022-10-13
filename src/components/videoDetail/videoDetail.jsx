import React from 'react';
import styles from '../videoDetail/videoDetail.module.css';


const VideoDetail = ({ video, video: { snippet } }) => {

  const src = "https://www.youtube.com/embed/" + video.id;

  return (
    <>
      <div className={styles.videoDetail}>
        <div>
          <iframe type="text/html" width="720" height="405" src={src}
            frameborder="0" allowfullscreen></iframe>
        </div>
        <div className={styles.videoInfo}>
          <h2>{snippet.title}</h2>
          <p>{snippet.channelTitle}</p>
          <hr></hr>
          <pre>{snippet.description}</pre>
        </div>
      </div>
    </>
  );


}
export default VideoDetail;