import React from 'react';
import './Search.css'
import Rate from '../Rate';
const Search=({setNameSearch, setRatingSearch, ratingSearch})=>{
    return(<div className='search'>
        <input type='text ' placeholder='Search for a movie ' 
        onChange={(e)=>setNameSearch(e.target.value)}/>
         <Rate
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
    </div>)
}
export default Search;