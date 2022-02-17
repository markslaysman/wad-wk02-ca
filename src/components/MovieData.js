import classes from './MovieData.module.css';
import Card from './globalui/Card';



function MovieData (props) {
    return (
        <Card>
            <div className={classes.container}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <div className={classes.poster}>
                    <img className={classes.posterimage} src={props.image} alt={props.title}/>
                </div>
                <div className={classes.plot}>
                    {props.shortplot}
                    {/* {props.fullplot} */ }
                </div>
                <div className={classes.rating}>
                    {props.rating}
                </div>
                

                
            </div>
        </Card>
    );
}

export default MovieData;