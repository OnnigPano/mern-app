import React from 'react';
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
    FavoriteBorder,
    AddShoppingCart,
    ShareOutlined
} from '@material-ui/icons';
import useStyles from './styles';


const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function ProductCard(props) {


    const classes = useStyles();
    return (
        <Card className={classes.root}>

            <CardMedia className={classes.media} image='/product1.jpg' title={props.title} />

            <CardHeader disableTypography className={classes.title} title={props.title} />

            <CardContent className={classes.desc} >

                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>

            </CardContent>

            <CardActions className={classes.actions} disableSpacing>

                <IconButton className={classes.fav} onClick={() => props.addToFavs()}>
                    <FavoriteBorder />
                </IconButton>
    
                    <IconButton onClick={() => props.addProductToCart(props.id)}>
                        <AddShoppingCart />
                    </IconButton>

                <IconButton aria-label="share">
                    <ShareOutlined />
                </IconButton>

                <span>
                    {currencyFormatter.format(Number(props.price))}
                </span>
            </CardActions>

        </Card>
    );
}

export default ProductCard;