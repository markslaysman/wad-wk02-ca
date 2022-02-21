// React Imports
import { useNavigate } from "react-router-dom";

// My Imports
import Card from './globalui/Card';
import classes from './MovieData.module.css';
import ReviewForm from './ReviewForm';
import Review from './Review';


function MovieData (props) {
    const navigate = useNavigate();
    const currentReviews = props.moviereviews;

    function addReviewHandler(reviewData) {
        currentReviews.push(reviewData);

        const url = `https://moviereview-9ec1c-default-rtdb.firebaseio.com/movielist/${props.id}.json/`;

        fetch (
            url,
            {
                method: 'PATCH',
                body: JSON.stringify(
                    {
                        "moviereviews" : currentReviews
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/loadingpage');
        });
    }

    return (
        <section>
            <div className={classes.mainarea}>
                <Card>
                    <div className={classes.moviecontainer}>
                        <div className={classes.title}>
                            {props.title}
                        </div>
                        <div className={classes.poster}>
                            <img className={classes.posterimage} src={props.image} alt={props.title} />
                        </div>
                        <div className={classes.plot}>
                            {/*  {props.shortplot} */ }
                            {props.fullplot}
                        </div>
                        <div className={classes.rating}>
                            Overall Rating: {props.rating} / 5
                        </div>
                    </div>
                </Card>

                <ReviewForm onAddReview={addReviewHandler} />
            </div>

            <div>
                {props.moviereviews.map((review) => (
                    <Review
                        key={review.reviewername} 
                        reviewername={review.reviewername}
                        reviewdate={review.reviewdate}
                        reviewtext={review.reviewtext}
                        reviewrating={review.reviewrating}
                    />
                ))}
            </div>
        </section>
    );
}

export default MovieData;