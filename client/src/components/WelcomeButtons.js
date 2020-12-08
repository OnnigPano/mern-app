import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root: {
        display: 'flex',
        /* height: '200px', */
        width: '220px',
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto'
    },
    typo: {
        fontFamily: 'Shadows Into Light'
    }
}));

const Buttons = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Typography className={classes.typo} variant="h4" component="h4">Welcome!</Typography> */}
            <Link to="/products" style={{textDecoration: 'none'}}>
                <Button variant="contained" color="secondary" size="large" >Comenzar</Button>
            </Link>
            {/* <div>
                <Button variant="contained" color="primary" >Iniciar Sesión</Button>
                <Button variant="contained" color="primary" >Registrarse </Button>
            </div> */}
        </div>
    );
}

export default Buttons;