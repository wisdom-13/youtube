import React from 'react';
import Video from '../video/video';
import styles from '../videoList/videoList.module.css';

const VideoList = ({ videos, onDetail }) => {

  return (
    <>
      <ul className={styles.videos}>
        {videos.map(video => (
          <Video
            key={video.id}
            id={video.id}
            video={video}
            onDetail={onDetail}
          >
          </Video>
        ))}
      </ul>
    </>
  );
}

export default VideoList;