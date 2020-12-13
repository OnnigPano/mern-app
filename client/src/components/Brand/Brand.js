import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';


function Brand() {

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h1" component="h1" align="center">Kimbalache Store</Typography>
            <Typography className={classes.subtitle} variant="h3" component="h2" align="center">Todo para tu mascota</Typography>
        </React.Fragment>
    );
}

export default Brand;