import { useEffect, useState, useRef, useCallback } from 'react';
import './app.css';
import VideoDetail from './components/videoDetail/videoDetail';
import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHeader';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  const inputRef = useRef();

  useEffect(() => {
    youtube
      .mostPopular(keyword)
      .then(videos => setVideos(videos));
  }, [youtube])

  const loadData = useCallback((keyword) => {
    youtube
      .search(keyword)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      })
  }, [youtube])

  const handleDetail = (video) => {
    setSelectedVideo(video);
  }

  const resetKeyword = () => {
    youtube
      .search(null)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
        inputRef.current.value = "";
      })
  }

  return (
    <>
      <SearchHeader inputRef={inputRef} onSearch={loadData} onResetKeyword={resetKeyword}></SearchHeader>
      {selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail>}
      <VideoList videos={videos} keyword={keyword} onDetail={handleDetail}></VideoList>
    </>
  );
}

export default App;
