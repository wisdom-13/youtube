import React from 'react';

const VideoDetail = (props) => {

  const id = props.id;
  const src = "https://www.youtube.com/embed/" + id;

  if (id !== "" && typeof id !== undefined) {
    return (
      <>
        <iframe id="ytplayer" type="text/html" width="720" height="405" src={src}
          frameborder="0" allowfullscreen></iframe>
      </>
    );
  }
  else {
    return "";
  }

}
export default VideoDetail;