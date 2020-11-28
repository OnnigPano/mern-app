import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Grid } from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';
import ProductCard from '../components/ProductCard';



const ProductsList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        try {
            const response = await axios.get(process.env.BASE_URL + '/products')
            setAllProducts([response.data]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error.response);
        } 
    }

    return (
        <Fragment>
            <Grid container spacing={3}>
                {
                    allProducts.map(product => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}  key={product._id}>
                                {loading ? <Skeleton animation="wave"><ProductCard/></Skeleton> : <ProductCard  title={product.productName} description={product.description} price={product.price} />}
                            </Grid>
                        );    
                    })
                }
            </Grid>
        </Fragment>
    );
}

export default ProductsList;