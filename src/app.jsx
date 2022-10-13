import { useEffect, useState } from 'react';
import './app.css';
import VideoDetail from './components/videoDetail/videoDetail';
import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHeader';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    youtube
      .mostPopular(keyword)
      .then(videos => setVideos(videos));
  }, [])

  const loadData = (keyword) => {
    youtube
      .search(keyword)
      .then(videos => setVideos(videos))
    // setId("");
    // setKeyword(keyword);
  }

  const handleDetail = (video) => {
    setSelectedVideo(video);
  }

  const resetKeyword = () => {
    setSelectedVideo("");
    setKeyword("");
  }

  return (
    <>
      <SearchHeader onSearch={loadData} onResetKeyword={resetKeyword}></SearchHeader>
      {selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail>}
      <VideoList videos={videos} keyword={keyword} onDetail={handleDetail}></VideoList>
    </>
  );
}

export default App;
