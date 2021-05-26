import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {moviesData} from'./Components/MovieData/MovieData'
import MoviesList from './Components/MovieList/MoviesList'
import AddMovie from './Components/AddMovie/AddMovie'
import Search from './Components/Search/Search'
import DetailPage from './Components/DetailPage/DetailPage';


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
      <Router>
        <Switch>
          <Route path='/'>
      <div className="titl">
        <h1>Movies Store</h1>
      </div>
      <Search setNameSearch={setNameSearch}  setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}/>
      <MoviesList moviesData={moviesList} nameSearch={nameSearch}  ratingSearch={ratingSearch}/>
      <AddMovie addMovie={addMovie} setNewMovieName={setNewMovieName} setSrc={setSrc} setRating={setRating}/>
       </Route>
      <Route path='/detail/:movieId' component={DetailPage}/>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
