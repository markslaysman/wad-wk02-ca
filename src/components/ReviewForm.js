import { useRef } from 'react';


import classes from './ReviewForm.module.css';
import Card from './globalui/Card';

function ReviewForm (props) {

    const reviewerNameRef = useRef();
    const reviewerRatingRef = useRef();
    const reviewTextRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = reviewerNameRef.current.value;
        const enteredRating = reviewerRatingRef.current.value;
        const enteredReviewText = reviewTextRef.current.value;

        const newReviewData = {
            reviewername: enteredName,
            reviewrating: enteredRating,
            reviewtext: enteredReviewText,
            reviewdate: new Date()
        };

        props.onAddReview(newReviewData);
    }


    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className={classes.container}>
                    <div className={classes.reviewtitle}>
                        What did you think of this movie?
                    </div>
                    <div>
                        <label htmlFor="reviewername">Name: </label>
                        <input type="text" id="reviewername" ref={reviewerNameRef} placeholder='Enter your name'/>
                        <label htmlFor="reviewerrating">Rating: </label>
                        <input type="text" id="reviewerrating" ref={reviewerRatingRef} placeholder='5' />
                    </div>
                    <div className={classes.reviewtextarea}>
                        <textarea className={classes.reviewformtext} ref={reviewTextRef} placeholder='Enter Your Review Here...'></textarea>
                    </div>
                    <div className={classes.reviewbutton}>
                        <button>Add Review</button>
                    </div>
                </div>
            </form>
        </Card>
    );
}

export default ReviewForm;