import { useEffect, useState } from 'react';
import './app.css';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';
import SearchHeader from './components/searchHeader';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useEffect");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    var data = fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResulte=25&key=AIzaSyDLq9DSJ7ltjJD6k3MVuIYdycwTIP1t_Xk", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setVideos(data);


  }, [])

  return (
    <>
      <SearchHeader></SearchHeader>
      <VideoList></VideoList>
      <VideoDetail></VideoDetail>
    </>
  );
}

export default App;
