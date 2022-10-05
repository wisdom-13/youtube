import React from 'react';

const Video = (props) => {


  const handleDetail = () => {
    props.onDetail(props.video.id);
  };

  const data = props.video.snippet;

  return (
    <div onClick={handleDetail} >
      <h3>{data.title}</h3>
      <img src={data.thumbnails.default.url}></img>
    </div>
  );
}

export default Video;