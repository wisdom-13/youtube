import React from 'react';
import styles from './video.module.css';

const Video = (props) => {


  const handleDetail = () => {
    props.onDetail(props.id);
  };

  const data = props.video.snippet;

  return (
    <li className={styles.video} onClick={handleDetail}>
      <img className={styles.thumbnails} src={data.thumbnails.default.url}></img>
      <div className={styles.info}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.channel}>{data.channelTitle}</p>
      </div>
    </li>
  );
}

export default Video;