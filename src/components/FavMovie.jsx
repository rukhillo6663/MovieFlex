import React from 'react'

function FavMovie({favMovieList, funcRemove}) {
  return (
    <div className='movie-collection'>
        {
            favMovieList.map(movie=>{
                const {Poster, Title}=movie
                return(
                    <div className='single-movie'>
                        <img src={Poster}/>
                        <h3>{Title}</h3>
                        <button onClick={() => funcRemove(movie)}>Remove from Favorites</button>
                        

                    </div>
                )
            })
        }
    </div>
  )
}

export default FavMovie