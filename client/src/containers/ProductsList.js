import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Grid,
    Dialog,
    Container
} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Skeleton } from '@material-ui/lab';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductForm from '../containers/ProductForm';

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
                                {loading ? <Skeleton animation="wave"><ProductCard /></Skeleton>
                                    : <ProductCard title={product.productName} description={product.description} price={product.price} />}
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

        </Container>
    );
}

export default ProductsList;