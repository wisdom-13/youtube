import React from 'react';
import Video from './video';

const VideoList = (props) => {
  console.log(props)
  return (
    <>
      <ul>
        {props.videos.map(video => (
          <li>
            <Video
              key={video.id.videoId}
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