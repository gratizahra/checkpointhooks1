import React,{useState} from 'react';

import './App.css';
import {moviesData} from './Components/MovieData'
import MoviesList from './Components/MovieList/MoviesList'
import AddMovie from './Components/AddMovie/AddMovie'
import Search from './Components/Search/Search'


function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [newMovieName, setNewMovieName] = useState('');
  const [src, setSrc] = useState('')
  const [nameSearch,setNameSearch]=useState('')
  
  const [ratingSearch, setRatingSearch] = useState(1);
  const [rating, setRating] = useState("");
  const addMovie = e => {
    e.preventDefault();
    let newMovie = {
      movieName: newMovieName,      
      source: src,
      rating: rating,
    };
    return setMoviesList([...moviesList, newMovie]);
  }
  return (
    <div className="App">
      <div className="titl">
        <h1>Movies Store</h1>
      </div>
      <Search setNameSearch={setNameSearch}  setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}/>
      <MoviesList moviesData={moviesList} nameSearch={nameSearch}  ratingSearch={ratingSearch}/>
      <AddMovie addMovie={addMovie} setNewMovieName={setNewMovieName} setSrc={setSrc} setRating={setRating}/>
    </div>
  );
}

export default App;
