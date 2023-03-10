import Movie from './Movie'
import React from 'react'
import Data from './data.json'
import MovieInfo from './MovieInfo'

class MovieBox extends React.Component{
    constructor(props){
        super(props)

    }


        


    render(){
        return (
            <>
            {Data.map((movie) => {
                return (<Movie
                key = {movie.Title}
                title = {movie.Title}
                released = {movie.Released}
                img = {movie.Images[0]}
                movieInfo = {movie}                />)
            })}
            
            </>
        )
    }
}

export default MovieBox;