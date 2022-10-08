import React from 'react';
import styles from './video.module.css';

const Video = (props) => {


  const handleDetail = () => {
    props.onDetail(props.id);
  };

  const data = props.video.snippet;

  return (
    <li className={styles.video} onClick={handleDetail}>
      <div className={styles.thumbnailsBox}>
        <img className={styles.thumbnails} src={data.thumbnails.medium.url}></img>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.text}>{data.channelTitle}</p>
        <p className={styles.text}>{data.publishedAt}</p>
      </div>
    </li>
  );
}

export default Video;