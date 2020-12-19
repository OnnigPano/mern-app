import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {
    Container,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    IconButton,
    // Button
} from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { Redirect } from 'react-router-dom';
import BottomCartNav from '../../components/BottomCartNav/CartNav';
import { AuthContext } from '../../context/auth-context';
// import {Link as RouterLink} from 'react-router-dom';
import useStyles from './styles';

function Cart() {

    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        getCartProducts();
    }, []);

    useEffect(() => {
        //cada vez q se actualizan los productos en el carrito
        //se calcula el total en el cliente
        calcTotalAmount(products);
    }, [products])

    const classes = useStyles();

    async function getCartProducts() {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const products = await axios.get(process.env.REACT_APP_BASE_URL + '/cart', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setProducts(products.data.items);
            } catch (error) {
                console.log(error);
            }
        }
    }
    async function deleteProductFromCart(id) {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await axios.delete(`${process.env.REACT_APP_BASE_URL}/cart/${id}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setProducts(products.filter((item) => (item.product._id).toString() !== id));
            } catch (error) {
                console.log(error);
            }
        }
    }

    function calcTotalAmount (products) {
        let total = 0;
        if(products) {
            total = products.reduce((acum, product) => {
                return acum + (product.quantity * product.product.price);
            }, 0);
        }

        setTotal(total);
    }

    let emptyCart = (
        <div className={classes.emptyCart}>
            {/* <Button color="secondary" variant="contained" component={RouterLink} to="/products">
                Ir de compras
            </Button> */}
        </div>
    );

    let cart = (
        <div className={classes.flex}>
            <Container  maxWidth="md" disableGutters>
                <List className={classes.root}>
                    {products ? products.map(({product}) => {
                        return (
                            <React.Fragment key={product._id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="product image" src="/product1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={product.productName}
                                        secondary={'$' + product.price}
                                    />
                                    <IconButton edge="end" onClick={() => deleteProductFromCart(product._id)} aria-label="delete">
                                        <DeleteForeverOutlined />
                                    </IconButton>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        )
                    }) : null}
                </List>
            </Container>
            <BottomCartNav total={total} />
        </div>
    );

    return (
        <React.Fragment>
            {!authContext.isAuth ? <Redirect push to="/auth" /> : null}
            {products.length === 0 ? emptyCart : cart}
        </React.Fragment>
    );
}

export default Cart;