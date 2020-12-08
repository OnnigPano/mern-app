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
    IconButton
} from '@material-ui/core';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { Redirect } from 'react-router-dom';
import BottomCartNav from '../../components/BottomCartNav/CartNav';
import { AuthContext } from '../../context/auth-context';
import useStyles from './styles';

function Cart() {

    const [products, setProducts] = useState([]);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        getCartProducts();
    }, []);

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
                setProducts(products.data);
            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <React.Fragment>
            {!authContext.isAuth ? <Redirect push to="/auth" /> : null}
            <div className={classes.flex}>
                <Container style={{ marginTop: '20px' }}>
                    <List className={classes.root}>
                        {products ? products.map((p, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="product image" src="/product1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={p.productName}
                                            secondary={'$' + p.price}
                                        />
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteForeverOutlined />
                                        </IconButton>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            )
                        }) : null}
                    </List>
                </Container>
                <BottomCartNav />
            </div>
        </React.Fragment>
    );
}

export default Cart;