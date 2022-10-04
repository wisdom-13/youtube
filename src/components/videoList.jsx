import React from 'react';
import Video from './video';

const VideoList = (props) => {
  return (
    <>
      <ul>
        {props.videos.map(video => (
          <li>
            <Video
              key={video.id}
              video={video}
            >
            </Video>
          </li>
        ))}
      </ul>
    </>
  );
}

export default VideoList;