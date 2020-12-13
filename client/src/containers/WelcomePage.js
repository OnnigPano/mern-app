import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CustomizedPaper from '../components/CustomizedPaper';
import BackImg from '../components/BackImg';

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem'
        },
        textShadow: '2px 1px 0 #000',
    },
    subtitle: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            marginBottom: '50px'
        },
        marginBottom: '250px',
        textShadow: '2px 1px 0 #000'
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
        // '& div': {
        //     marginTop: '5px',
        // }
    }
}));

const Welcome = () => {

    const classes = useStyles();

    return (
        <BackImg>
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
        </BackImg>
    );
}

export default Welcome;