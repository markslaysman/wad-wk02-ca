// React Imports
import { useNavigate } from "react-router-dom";

// My Imports
import classes from './MovieData.module.css';
import Card from './globalui/Card';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { Navigate } from 'react-router-dom';

function MovieData (props) {
    const navigate = useNavigate();
    const currentReviews = props.moviereviews;

    function addReviewHandler(reviewData) {
        currentReviews.push(reviewData);

        console.log(JSON.stringify({
            "moviewreviews" : currentReviews
        }))
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
            navigate('/');
        });
    }

    return (
    <section>
        <Card>
            <div className={classes.container}>
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

        <div>
            <ReviewForm onAddReview={addReviewHandler} />
        </div>


    </section>






        
    );
}

export default MovieData;