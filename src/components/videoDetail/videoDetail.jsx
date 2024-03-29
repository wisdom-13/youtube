import React, { memo } from 'react';
import styles from '../videoDetail/videoDetail.module.css';


const VideoDetail = memo(
  ({ video, video: { snippet } }) => {

    const src = "https://www.youtube.com/embed/" + video.id;

    return (
      <>
        <div className={styles.videoDetail}>
          <div className={styles.videoBox}>
            <iframe type="text/html" width="100%" height="400px"
              title="youtube video player"
              src={src}
              frameBorder="0" allowFullScreen></iframe>
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
)
export default VideoDetail;