import './App.css';
import React from 'react'
import Button from './Button';
import MovieInfo from './MovieInfo'


class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false,
            knowMore: false
        }
    }



    handleHover = () => {
        console.log(this.state.hover, "state")

            this.setState({
                hover: !this.state.hover
            })
    }

    handleClick = () => {
        console.log(this.state.knowMore, "click")
            this.setState({
                knowMore: !this.state.knowMore,
                hover: !this.state.hover 
            })

    }


    render(){
        return (
            <>
            {this.state.knowMore ? <MovieInfo onClick={this.handleClick} movie = {this.props.movieInfo}/> : <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className='movie-cont'>
            <div className="movie-info">
                <div className="movie-text">
                <h2>Title: {this.props.title}</h2>
                <h3>Release: {this.props.released}</h3>
                </div>
                <figure className="movie-img">
                    <img src={this.props.img} />
                </figure>
            </div>
            <Button hover = {this.state.hover} onClick = {this.handleClick}/>
            </div>    }
            </>
            
            
            )
    }
   
}

export default Movie;