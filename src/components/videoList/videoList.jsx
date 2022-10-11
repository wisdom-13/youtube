import React from 'react';
import Video from '../video/video';
import styles from '../videoList/videoList.module.css';

const VideoList = (props) => {

  const handleDetail = (id) => {
    props.onDetail(id);
  }

  return (
    <>
      <ul className={styles.videos}>
        {props.videos.map(video => (
          <Video
            key={video.id}
            id={video.id}
            video={video}
            onDetail={handleDetail}
          >
          </Video>
        ))}
      </ul>
    </>
  );
}

export default VideoList;