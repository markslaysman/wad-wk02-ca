import classes from './Review.module.css'
import Card from './globalui/Card';

function Review (props) {
    return (
        <Card>
            <div className={classes.reviewdata}>
                <div className={classes.reviewerinfo}>
                    <div>Name: {props.reviewername}</div>
                    <div>Review Date: {props.reviewdate}</div>
                    <div>Rating: {props.reviewrating}</div>
                </div>
                <div className={classes.reviewtext}>
                    <div>{props.reviewtext}</div>
                </div>
            </div>
        </Card>
 
    );
}

export default Review;