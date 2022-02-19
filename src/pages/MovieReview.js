import MovieData from '../components/MovieData';

function ReviewPage (props) {
    console.log ("props passed to review: " + props);
    return (
        <section>
            <h1>Add Movie Review</h1>
            <MovieData
                    key={props.id}
                    id={props.id}
                    title={props.title}
                    image={props.image}
                    shortplot={props.shortplot}
                    fullplot={props.fullplot}
                    rating={props.rating}
                />
        </section>
    );
}

export default ReviewPage;