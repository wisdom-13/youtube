import React from 'react';
import styles from './video.module.css';

const Video = ({ video, video: { snippet }, onDetail }) => {

  return (
    <li className={styles.video} onClick={() => onDetail(video)}>
      <div className={styles.thumbnailsBox}>
        <img className={styles.thumbnails} src={snippet.thumbnails.medium.url}></img>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{snippet.title}</h3>
        <p className={styles.text}>{snippet.channelTitle}</p>
        <p className={styles.text}>{snippet.publishedAt}</p>
      </div>
    </li>
  );
}

export default Video;