import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import WelcomeButtons from '../components/WelcomeButtons';
import BackImg from '../components/BackImg';

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem'
        }
    },
    subtitle: {
        fontFamily: 'Shadows Into Light!important',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            marginBottom: '150px'
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