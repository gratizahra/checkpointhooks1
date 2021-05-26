import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';
import {Link} from 'react-router-dom'

function OpenTrailer(alpha){
    window.open(
        alpha,'_blank'
    )
}
const MovieCard=({movie:{trailer,id,source,movieName,description,rating}})=>{
    return(
        <div className="container" id={id}>
         <Link to={`/detail/${id}`}>
         <div className='movie-name'>
             <h1>{movieName}</h1>
         </div>
         <div className="movie-image">
             <img src={source} alt='src'></img>
         </div>
         <div className='movie-rating'>
          <Rate rating={rating} />
          </div>
          <div className="descript">{description}</div>
          <a href={description} target='_blank' rel="noreferrer">Read more...</a>
                    <button onClick={()=>OpenTrailer(trailer)}>
                        <i className="fab fa-youtube"></i>
                        <span>Play trailer</span>
                    </button>
                
        </Link>
        </div>
    )
}
export default MovieCard;

