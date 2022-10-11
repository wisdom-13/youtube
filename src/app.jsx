import { useEffect, useState } from 'react';
import './app.css';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHeader';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState();
  const [id, setId] = useState();

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

  const handleDetail = (id) => {
    setId(id);
  }

  const resetKeyword = () => {
    setId("");
    setKeyword("");
  }

  return (
    <>
      <SearchHeader onSearch={loadData} onResetKeyword={resetKeyword}></SearchHeader>
      {/* <VideoDetail id={id}></VideoDetail> */}
      <VideoList videos={videos} keyword={keyword} onDetail={handleDetail}></VideoList>
    </>
  );
}

export default App;
