import React from 'react';
import Video from './video';
import styles from './video.module.css';

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
            id={(props.keyword) ? video.id.videoId : video.id}
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