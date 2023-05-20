import React from 'react'
function Movie({movieList, handleFavoriteMovie, favMovie, handleRemoveMovie}) {
  return (
    <div className='movie-collection'>
        {
            (movieList !==undefined||movieList!==null)&&
            movieList.map((movie)=>{
              
                
                const {Poster, Title}=movie
                return(
                    <div className={ !favMovie.includes(movie) ? 'single-movie': 'single-movie selected' } >
                        <img src={Poster}/>
                        <h3>{Title}</h3>
                        <button className={ favMovie.includes(movie) ? 'hidenBtn': '' } onClick={()=>{handleFavoriteMovie(movie)}} >Add to favorite
                        </button>
                        <button className={!favMovie.includes(movie) ? 'hidenBtn': '' } onClick={() => handleRemoveMovie(movie)}>Remove from favorite</button>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Movie