import './app.css';
import MovieDetail from './components/movieDetail';
import MovieList from './components/movieList';
import SearchHeader from './components/searchHeader';

function App() {
  return (
    <>
      <SearchHeader></SearchHeader>
      <MovieList></MovieList>
      <MovieDetail></MovieDetail>
    </>
  );
}

export default App;
