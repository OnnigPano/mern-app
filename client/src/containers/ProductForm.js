import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { FormGroup, TextField, Button, Container, InputAdornment } from '@material-ui/core';
import axios from 'axios';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            fixedDecimalScale
            decimalScale={2}
        />
    );
}


const ProductForm = (props) => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleFileUpload = (event) => {
        console.log(event.target.files[0])
        setValues({
            ...values,
            [event.target.name]: event.target.files[0]
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/products`, values);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container maxWidth="lg">

            <form
                noValidate
                style={{ width: '100%', maxWidth: '600px', margin: '30px auto' }}
                onSubmit={(e) => { 
                    submitHandler(e);
                    //if there are no validation errors
                    props.handleDialog(false);
                    props.addProductToList(values);
                }}
            >
                <FormGroup>

                    <TextField
                        onChange={handleChange}
                        name="productName"
                        color="secondary"
                        label="Nombre del producto"
                        variant="outlined"
                        type="text"
                        margin="dense"
                    />

                    <TextField
                        onChange={handleChange}
                        name="category"
                        color="secondary"
                        label="Categoria"
                        variant="outlined"
                        type="text"
                        margin="dense"
                    />

                    <TextField
                        color="secondary"
                        name="price"
                        margin="dense"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.price}
                        InputProps={{
                            startAdornment: <InputAdornment position="start" >$</InputAdornment>,
                            inputComponent: NumberFormatCustom
                        }}
                    />

                    <Button
                        onChange={handleFileUpload}
                        style={{ marginTop: '8px', backgroundColor: 'lightblue' }}
                        variant="contained"
                        component="label"
                    >
                        Subir Imágen
                        <input
                            accept="image/*"
                            name="image"
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>

                    <TextField
                        name="description"
                        onChange={handleChange}
                        style={{ marginTop: '8px' }}
                        color="secondary"
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                    />

                    <Button
                        style={{ marginTop: '8px' }}
                        variant="contained"
                        color="secondary"
                        type="submit"
                    >
                        Crear Producto
                    </Button>

                </FormGroup>

            </form>

        </Container>
    );
}

export default ProductForm;