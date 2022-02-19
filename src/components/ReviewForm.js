
import classes from './ReviewForm.module.css';
import Card from './globalui/Card';

function ReviewForm () {
    return (
        <Card>
            <div className={classes.container}>
                <div className={classes.reviewtitle}>
                    What did you think of this movie?
                </div>
                <div className={classes.reviewtextarea}>
                    <textarea className={classes.reviewformtext} placeholder='Enter Your Review Here...'></textarea>
                </div>
                <div className={classes.reviewbutton}>
                    <button>Add Review</button>
                </div>
                
            </div>
        </Card>
    );
}

export default ReviewForm;