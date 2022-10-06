import React from 'react';
import Video from './video';

const VideoList = (props) => {

  const handleDetail = (id) => {
    props.onDetail(id);
  }

  return (
    <>
      <ul>
        {props.videos.map(video => (
          <li>
            <Video
              key={video.id}
              id={(props.keyword) ? video.id.videoId : video.id}
              video={video}
              onDetail={handleDetail}
            >
            </Video>
          </li>
        ))}
      </ul>
    </>
  );
}

export default VideoList;