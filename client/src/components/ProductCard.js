import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActionArea, Typography, CardActions, IconButton } from '@material-ui/core';
import { Favorite, ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        maxWidth: 600
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
})


const ProductCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
                <CardActionArea>
                    <CardHeader title={props.title} />
                    <CardMedia className={classes.media} image='/1595034870102.jpg' title={props.title} />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton>
                        <Favorite />
                    </IconButton>
                    <IconButton>
                        <ShoppingCart />
                    </IconButton>
                    {props.price}
                </CardActions>
        </Card>
    );
}

export default ProductCard;