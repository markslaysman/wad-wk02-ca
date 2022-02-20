import { useState, useEffect} from 'react'

import classes from './AllMovies.module.css';
import MovieList from '../components/MovieList';

function AllMoviesPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMovies, setLoadedMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
    
        fetch(
            'https://moviereview-9ec1c-default-rtdb.firebaseio.com/movielist.json'
        )
        .then(response => {
            return response.json();
        })
        .then(data => {
             const movies = [];

            for (const key in data) {
                const movie = {
                    id: key,
                    ...data[key]
                };

                movies.push(movie);
            }

            setIsLoading(false);
            setLoadedMovies(movies);

        });
    
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading Please Wait...</p>
            </section>
        );
    }
    
    return (
        <section>
            <div className={classes.pagetitle}>
                <h1>Please Rate This Movie</h1>
            </div>
            <div className={classes.moviecontent}>
                <MovieList movies={loadedMovies} />
            </div>

        </section>
    );
}

export default AllMoviesPage;