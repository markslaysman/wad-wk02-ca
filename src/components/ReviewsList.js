import classes from './ReviewsList.module.css';
import Review from './Review';

function ReviewsList () {
    return (
        <div>
            <div>
                Current Reviews Go Here
            </div>
            <div>
                <Review />
            </div>
        </div>
    );
}

export default ReviewsList;