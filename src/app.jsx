import { useEffect, useState } from 'react';
import './app.css';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';
import SearchHeader from './components/searchHeader';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=샤이&key=AIzaSyDLq9DSJ7ltjJD6k3MVuIYdycwTIP1t_Xk", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <SearchHeader></SearchHeader>
      <VideoList videos={videos}></VideoList>
      <VideoDetail></VideoDetail>
    </>
  );
}

export default App;
