import classes from './Review.module.css'
import Card from './globalui/Card';

function Review () {
    return (
        <Card>
            <div className={classes.reviewdata}>
                <div>REVIEW DATE</div>
                <div>RATING</div>
                <div>TEXT</div>
            </div>
        </Card>
    );
}

export default Review;