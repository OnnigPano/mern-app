import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import WelcomeButtons from '../components/WelcomeButtons';
import BackImg from '../components/BackImg';
/* import dogImage from '../imgs/dog1.webp';
import dogImage2 from '../imgs/dog4.jpg'; */

const useStyles = makeStyles(theme => ({
    /* root: {
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${dogImage})`,
            height: 'calc(100vh - 56px)',
        },
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${dogImage2})`,
            height: 'calc(100vh - 64px)',
        },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' 
    }, */
    title: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        paddingTop: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem'
        }
    },
    subtitle: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            marginBottom: '220px'
        },
        marginBottom: '300px'
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
                <WelcomeButtons />
            </BackImg>
    );
}

export default Welcome;