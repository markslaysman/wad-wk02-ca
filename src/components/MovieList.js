import MovieData from './MovieData';
import classes from './MovieList.module.css';

function MovieList (props) {

    return (
        <section>
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
                        moviereviews={movie.moviereviews}
                    />
                ))}
            </div>

        </section>
    );
}

export default MovieList;