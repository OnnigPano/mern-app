import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {
    Grid,
    Dialog,
    Container,
    Backdrop,
    CircularProgress
} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductForm from '../containers/ProductForm';
import AuthDialog from '../components/AuthDialog';
import CustomizedSnackbars from '../components/SnackBar/SnackBar';
import { AuthContext } from '../context/auth-context';
import { addFav, deleteFav } from '../utils/favsFunctions';

const styles = {
    fab: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '10'
    }
}

const ProductsList = () => {
    const [allProducts, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addForm, showAddForm] = useState(false);
    const [authMessage, setAuthMessage] = useState(false);
    const [snackBar, handleSnackBar] = useState({ open: false, severity: "success", message: "Añadido al carrito!" });

    const authContext = useContext(AuthContext);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`)
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    function addProductToList(product) {
        setProducts([
            ...allProducts,
            product
        ]);
    }

    async function addToCart(id) {
        if (authContext.isAuth) {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    //Hay que mandar tambien el quantity, por ahora hardcodeado
                    await axios.post(process.env.REACT_APP_BASE_URL + '/cart', { productId: id, quantity: 1 }, {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
                    handleSnackBar({ ...snackBar, open: true, severity: "success", message: "Añadido al carrito!" });
                } catch (e) {
                    console.log(e);
                }
            }
        } else {
            setAuthMessage(true);
        }
    }

    async function addToFavs(id) {
        if (authContext.isAuth) {
            //Manejar el catch acá o en la declaracion del metodo?
            await addFav(id);
            handleSnackBar({ ...snackBar, open: true, severity: "info", message: "Añadido a favoritos!" });
            authContext.favs.push(id);
        } else {
            setAuthMessage(true);
        }
    }

    function deleteFromFavs(id) {
        if (authContext.isAuth) {
            (async () => {
                await deleteFav(id);
                authContext.favs = authContext.favs.filter((favId) => favId.toString() !== id);
            })();
        }
    }

    return (
        <Container style={{ marginTop: '20px' }}>

            <Dialog
                onClose={() => showAddForm(false)}
                open={addForm}
                fullWidth={true}
                maxWidth="sm"
            >
                <ProductForm handleDialog={showAddForm} addProductToList={addProductToList} />
            </Dialog>

            {authMessage ? <AuthDialog handleClose={setAuthMessage} /> : null}

            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
                spacing={3}
            >
                {
                    allProducts.map((product, index) => {
                        return (
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                md={4}
                                lg={3}
                                key={index}
                            >
                                {loading ?
                                    <Backdrop open={loading}>
                                        <CircularProgress color="primary" />
                                    </Backdrop>
                                    :
                                    <ProductCard
                                        addToFavs={addToFavs}
                                        deleteFromFavs={deleteFromFavs}
                                        addProductToCart={addToCart}
                                        product={product}
                                        alreadyInFavs={authContext.favs.includes(product._id)}
                                    />
                                }
                            </Grid>
                        );
                    })
                }
            </Grid>

            <Fab
                style={styles.fab}
                onClick={() => showAddForm(true)}
                color="secondary"
                size="large"
                aria-label="add"
            >
                <AddIcon />
            </Fab>
            <CustomizedSnackbars snackBarState={snackBar} handleFromParent={handleSnackBar} />
        </Container>
    );
}

export default ProductsList;