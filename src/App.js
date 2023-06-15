import './App.css';
//import {Routes, Route} from 'react-router-dom'
import React from 'react';
import {useEffect, useState} from 'react'

import Header from './components/Header';
import Movie from './components/Movie';
import FavMovie from './components/FavMovie'

const App = () =>  {
  const [movieData, setMovieData]= useState([]);
  const [favMovie, setFavMovie]= useState([]);
  const [inputValue, setInputValue]= useState('');
      
 useEffect(()=>{
  const  FavoriteMovies=JSON.parse(localStorage.getItem('favoriteMovies'));
  console.log(FavoriteMovies)
  FavoriteMovies!==null &&setFavMovie(FavoriteMovies)
 },[])   
     
  //Save search input value inside state
  const handleInputValue=(event)=>{
   setInputValue(event.target.value)
   
  }
  //Fetch the data according to search input value
  const handleSearchValue=()=>{
    fetch(`https://www.omdbapi.com/?apikey=29ad3690&s=${inputValue}`)
          .then(res=>res.json())
          .then(data=>setMovieData(data.Search))
    setInputValue('')
  }

  //Add inside fav-movie list
  const addToFavoriteMovie=(movie,e)=>{
  
    if(!favMovie.includes(movie)){
      const updatedFavList= [...favMovie, movie]
    setFavMovie(updatedFavList)
    saveToStorage(updatedFavList)  
    }
     
  }
  const removeFromFavorites = (movie) =>{
    const filteredFavMovies = this.state.favMovie.filter(el => el.imdbID !== movie.imdbID);
    setFavMovie( filteredFavMovies);
    localStorage.removeItem('favorites');
    saveToStorage(filteredFavMovies);
    
   }

  //store it inside the local storage
  const saveToStorage=(movies)=>{
      localStorage.setItem('favoriteMovies',JSON.stringify(movies))
  }


    
    return (
      <div className="App">
        
        <Header  inputValue={inputValue} handleInputValue={handleInputValue} handleSearchValue=  {handleSearchValue} /> 
        {
            //List of movies by search
          movieData.length!==0&&<Movie movieList={movieData} handleFavoriteMovie={addToFavoriteMovie} favMovie={favMovie} handleRemoveMovie={removeFromFavorites}/>
        }
        {
            //List of Fav-movies
            favMovie.length!==0&& 
            <div className='favMovie-header'>
              <h1 >FAVORITES:</h1>
              <FavMovie favMovieList={favMovie} funcRemove ={removeFromFavorites}/>
            </div> 
        }
    
        
         
      </div>
    );
  
}

export default App;
