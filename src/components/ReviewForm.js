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

        let currentDate = new Date();
        let reviewMonth = String(currentDate.getMonth() + 1);
        let reviewDay = String(currentDate.getDate());
        let reviewYear = currentDate.getFullYear();
        let reviewedDate = reviewMonth + '-' + reviewDay + '-' + reviewYear;

        const newReviewData = {
            reviewername: enteredName,
            reviewrating: enteredRating,
            reviewtext: enteredReviewText,
            reviewdate: reviewedDate
        };

        props.onAddReview(newReviewData);
    }

    return (
        <Card>
            <form className={classes.container} onSubmit={submitHandler}>
                <div className={classes.reviewtitle}>
                    What did you think of this movie?
                </div>
                <div className={classes.reviewbasicinfo}>
                    <div className={classes.reviewerinfo}>
                        <label htmlFor="reviewername">Name: </label>
                        <input type="text" id="reviewername" ref={reviewerNameRef} placeholder='Enter your name'/>
                    </div>
                    <div className={classes.reviewerratinginfo}>
                        <label htmlFor="reviewerrating">Rating: </label>
                        <input type="text" id="reviewerrating" ref={reviewerRatingRef} placeholder='5' />
                    </div>
                </div>
                <div className={classes.reviewtextarea}>
                    <textarea className={classes.reviewformtext} ref={reviewTextRef} placeholder='Enter Your Review Here...'></textarea>
                </div>
                <div className={classes.reviewbutton}>
                    <button>Add Review</button>
                </div>
            </form>
        </Card>
    );
}

export default ReviewForm;