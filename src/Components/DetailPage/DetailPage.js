import React from 'react'
import {useParams,Link} from 'react-router-dom';
import {moviesData} from '../MovieData/MovieData'
import Rate from'../Rate'


function OpenTrailer (alpha){
    window.open(
        alpha,'_blank'
    )
}
function DetailPage(){
    const {movieId}=useParams();
    const movie = moviesData.find(el => el.id ==movieId);
    return(
        <div className='detailo'>
            <div className='deuxColumn'>
                <img src={movie.source} alt={movie.movieName} className="carding"/>
            </div>
            <div className='deuxColumn right'>
                <h1>{movie.movieName}</h1>
                <div className='oneLine'>
                    <Rate rating={movie.rating}/>
                    <p>{movie.description}</p>
                <div className='deuxBoutons'>
                    <button className='bouton' onClick={()=>OpenTrailer(movie.trailer)}>Watch Trailer</button>
                    <Link  className='boutan' to='/'> Back Home</Link>

                </div>
                </div>
            </div>
        </div>
    )
}
export default DetailPage;