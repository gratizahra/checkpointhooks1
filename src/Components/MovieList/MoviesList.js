import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
const MoviesList=({moviesData,nameSearch,ratingSearch})=>{
    return(<div className='movie-list-conatiner'>
        {moviesData.filter((el)=>el.rating >= ratingSearch && el.movieName.toLowerCase().includes(nameSearch.toLowerCase())).map((el,i)=>(
            <MovieCard key={i} movie={el}></MovieCard>))}
    </div>
    )
}
export default MoviesList;