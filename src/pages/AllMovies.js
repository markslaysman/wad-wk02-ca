import MovieList from '../components/MovieList';

const DUMMY_DATA = [
    {
        id: 'tt0407887',
        title: 'The Departed',
        image: 'https://imdb-api.com/images/original/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_Ratio0.6762_AL_.jpg',
        shortplot: `To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.`,
        fullplot: `In this crime-action tour de force, the South Boston state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. But when it becomes clear to both the mob and the police that there is a mole in their midst, Billy and Colin are suddenly in danger of being caught and exposed to the enemy - and each must race to uncover the identity of the other man in time to save themselves. But is either willing to turn on their friends and comrades they've made during their long stints undercover?`,
        rating: '4.25',
    },
    {
        id: 'tt0181875',
        title: 'Almost Famous',
        image: 'https://imdb-api.com/images/original/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.7273_AL_.jpg',
        shortplot: `In 1973, 15-year-old William Miller's unabashed love of music and aspiration to become a rock journalist lands him an assignment from Rolling Stone magazine to interview and tour with the up-and-coming band, Stillwater.`,
        fullplot: `The early 1970s. William Miller is 15-years old and an aspiring rock journalist. He gets a job writing for Rolling Stone magazine. His first assignment: tour with the band Stillwater and write about the experience. Miller will get to see what goes on behind the scenes in a famous band, including the moments when things fall apart. Moreover, for him, it will be a period of new experiences and finding himself.`,
        rating: '3.95',
    },
    {
        id: 'tt0151804',
        title: 'Office Space',
        image: 'https://imdb-api.com/images/original/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_Ratio0.7273_AL_.jpg',
        shortplot: `Unable to endure another mind-numbing day at Initech Corporation, cubicle slave Peter Gibbons gets fired up and decides to get fired.`,
        fullplot: `In the Initech office, the insecure Peter Gibbons hates his job and the obnoxious Division VP Bill Lumbergh who has just hired two efficiency consultants to downsize the company. His best friends are two software engineers Michael Bolton and Samir Nagheenanajar, that also hate Initech, and his intrusive next door neighbor Lawrence. He believes his girlfriend Anne is cheating on him but she convinces Peter to visit the hypnotherapist Dr. Swanson. Peter tells how miserable his life is and Dr. Swanson hypnotizes him and he goes into a state of ecstasy. However, Dr. Swanson dies immediately after giving the hypnotic suggestion to Peter. Peter, in his new state, starts to date the waitress Joanna and changes his attitude which results in his being promoted by the consultants. When he discovers that Michael and Samir will be downsized, they decide to plant a virus in the banking system to embezzle fraction of cents on each financial operation into Peter's account. However Michael commits a mistake in the software on the decimal place and they siphon off over $300 thousand. The desperate trio tries to fix the problem, return the money and avoid going to prison.`,
        rating: '3.85',
    },
];

function AllMoviesPage() {
    return (
        <section>
            <MovieList movies={DUMMY_DATA} />
        </section>
    );
}

export default AllMoviesPage;