import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    IconButton
} from '@material-ui/core';
import {
    Favorite,
    ShoppingCart,
    Share
} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        marginTop: '20px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
})

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


const ProductCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>

            <CardMedia className={classes.media} image='/product1.jpg' title={props.title} />

            <CardHeader title={props.title} />

            <CardContent>

                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>

            </CardContent>

                <CardActions disableSpacing>

                    <IconButton>
                        <Favorite />
                    </IconButton>

                    <IconButton>
                        <ShoppingCart />
                    </IconButton>

                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>

                    <span style={{ fontSize: 'x-large' }} >
                        {currencyFormatter.format(Number(props.price))}
                    </span>


                </CardActions>

        </Card>
    );
}

export default ProductCard;