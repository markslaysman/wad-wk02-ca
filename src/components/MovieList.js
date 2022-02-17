import MovieData from './MovieData';
import classes from './MovieList.module.css';

function MovieList (props) {
    return (
        <div className={classes.container}>
            {props.movies.map((movie) => (
                <MovieData
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    shortplot={movie.shortplot}
                    fullplot={movie.fullplot}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}

export default MovieList;