import classes from './Review.module.css'
import Card from './globalui/Card';

function Review (props) {
    return (
         <div className={classes.reviewdata}>
            <div>{props.reviewername}</div>
            <div>{props.reviewdate}</div>
            <div>{props.reviewtext}</div>
            <div>{props.reviewrating}</div>
        </div>
 
    );
}

export default Review;