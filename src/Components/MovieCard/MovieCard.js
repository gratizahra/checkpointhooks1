import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';
const MovieCard=({movie:{source,movieName,description,rating}})=>{
    return(
        <div className="container">
         <div className='movie-name'>
             <h1>{movieName}</h1>
         </div>
         <div className="descript">{description}</div>
         <div className="movie-image">
             
             <img src={source} alt='src'></img>
         </div>
         <div className='movie-rating'>
          <Rate rating={rating} />
        </div>
       
        </div>
    )
}
export default MovieCard;

