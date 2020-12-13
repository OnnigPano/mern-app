import React from 'react';
import { Typography } from '@material-ui/core';
import CustomizedPaper from '../../components/CustomizedPaper';
import BackImg from '../../components/BackImg';
import useStyles from './styles';

const Welcome = () => {

    const classes = useStyles();

    return (
        <BackImg>
            <div className={classes.wrapper}>
                <div>
                    <Typography className={classes.title} variant="h1" component="h1" align="center">Kimbalache Store</Typography>
                    <Typography className={classes.subtitle} variant="h3" component="h2" align="center">Todo para tu mascota</Typography>
                </div>

                <div className={classes.cards}>
                    <CustomizedPaper image="/puppy.jpg" category="Perros" target="/products" />
                    <CustomizedPaper image="/kitten.jpg" category="Gatos" target="/products" />
                    <CustomizedPaper image="/iguana.jpg" category="Reptiles" target="/products" />
                    <CustomizedPaper image="/product1.jpg" category="Accesorios" target="/products" />
                </div>
            </div>
        </BackImg>
    );
}

export default Welcome;