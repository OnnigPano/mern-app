import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Grid, Dialog } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Skeleton } from '@material-ui/lab';
import ProductCard from '../components/ProductCard';
import ProductForm from '../containers/ProductForm';

// Estilos momentaneos
const styles = {
    fab: {
        position: 'absolute',
        bottom: '20px',
        left: '20px'
    }
}

const ProductsList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addForm, showAddForm] = useState(false);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`)
            setAllProducts([response.data]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error.response);
        }
    }

    return (
        <Fragment>
            <Dialog maxWidth="lg" onClose={() => showAddForm(false)} open={addForm} fullWidth={true} maxWidth="sm"><ProductForm /></Dialog>
            <Grid container spacing={3} >
                {
                    allProducts.map(product => {
                        return (
                            <Grid
                                item xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                key={product._id}
                            >
                                {loading ? <Skeleton animation="wave"><ProductCard /></Skeleton>
                                    : <ProductCard  title={product.productName} description={product.description} price={product.price} />}
                            </Grid>
                        );
                    })
                }
            </Grid>
            <Fab style={styles.fab} onClick={() => showAddForm(true)} color="secondary" size="large" aria-label="add">
                <AddIcon />
            </Fab>
        </Fragment>
    );
}

export default ProductsList;