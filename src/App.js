import React from 'react';
import { useState, useEffect} from 'react';
import MovieCard from './MovieCard'
import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=423b6416';
const movie1 =
    {
        "Title": "LEGO Disney Princess: The Castle Quest",
        "Year": "2023",
        "imdbID": "tt28477869",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWQ0MjJjZjUtNmU1Zi00ODc3LWE5ZWMtMjIyM2QxMDA0NGZjXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg"
    }

const App = () =>
{
        const [movies, setMovies] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
        }
    useEffect(() =>{
            searchMovies('Disney Princess');


    }, []);


    return (
    
      <div className="app">
        <h1>Disney World</h1>

        <div className="search"> 
        <input
            placeholder= " Search your disney movie"
            value={searchTerm}
            onChange= {(e) => setSearchTerm(e.target.value)}
        />
       
        <img 
                src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg" 
                alt="search" 
                onClick={() => searchMovies(searchTerm)} 
        />
        </div>      
        <div className="container">
                {movies.map((movie) =>(
                    <MovieCard movie={movie}/>
                ))}
                {movies.length > 0 ? (
                    <MovieCard movie={movies[0]} />
                ) : (
                    <div className="empty"> 
                    <h2>No movies found</h2>
                    </div>
                )}
        </div>
        </div>
      
    );
}

export default App;