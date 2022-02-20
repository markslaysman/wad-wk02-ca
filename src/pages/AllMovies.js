import { useState, useEffect} from 'react'

import classes from './AllMovies.module.css';
import MovieList from '../components/MovieList';


/*
const DUMMY_DATA = [
    {
        id: 'tt0407887',
        title: 'The Departed',
        image: 'https://imdb-api.com/images/original/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_Ratio0.6762_AL_.jpg',
        shortplot: `To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.`,
        fullplot: `In this crime-action tour de force, the South Boston state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. But when it becomes clear to both the mob and the police that there is a mole in their midst, Billy and Colin are suddenly in danger of being caught and exposed to the enemy - and each must race to uncover the identity of the other man in time to save themselves. But is either willing to turn on their friends and comrades they've made during their long stints undercover?`,
        rating: '4.25',
        moviereviews: [
            {
                reviewername: 'Bob',
                reviewdate: "10/25/1901",
                reviewtext: 'Great Movie',
                reviewrating: "3.2",
            }
        ]
    },
];
*/

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