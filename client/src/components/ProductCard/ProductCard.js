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
    let { product, addToFavs, addProductToCart } = props;

    const classes = useStyles();
    return (
        <Card className={classes.root}>

            <CardMedia className={classes.media} image="/product1.jpg" />

            <CardHeader disableTypography className={classes.title} title={product.productName} />

            <CardContent className={classes.desc} >

                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>

            </CardContent>

            <CardActions className={classes.actions} disableSpacing>

                <IconButton className={classes.fav} onClick={() => addToFavs()}>
                    <FavoriteBorder />
                </IconButton>

                <IconButton onClick={() => addProductToCart(product._id)}>
                    <AddShoppingCart />
                </IconButton>

                <IconButton aria-label="share">
                    <ShareOutlined />
                </IconButton>

                <span>
                    {currencyFormatter.format(Number(product.price))}
                </span>
            </CardActions>

        </Card>
    );
}

export default ProductCard;