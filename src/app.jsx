import { useEffect, useState } from 'react';
import './app.css';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';
import SearchHeader from './components/searchHeader';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = (keyword) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    keyword = (keyword) ? keyword : "인기차트";

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyDLq9DSJ7ltjJD6k3MVuIYdycwTIP1t_Xk`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

    console.log("loading");
  }

  return (
    <>
      <SearchHeader onSearch={loadData}></SearchHeader>
      <VideoList videos={videos}></VideoList>
      <VideoDetail></VideoDetail>
    </>
  );
}

export default App;
