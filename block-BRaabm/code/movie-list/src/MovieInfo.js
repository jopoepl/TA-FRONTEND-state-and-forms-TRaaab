import Data from './data.json'

function MovieInfo(props){
    let movieKeys = Object.keys(props.movie)
    movieKeys.pop()
    return (
        <div>
            <ul className='movie-cont'>
                {movieKeys.map((movieKey, i) => {
                   return <li key={i}><span>{movieKey}:</span> {props.movie[movieKey]}</li>
                })}
                <button onClick={props.onClick}>CLOSE</button>
            </ul>
        </div>
    )
}

export default MovieInfo;