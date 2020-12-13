import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import dogImage from '../imgs/dog5.jpg';
import dogImage2 from '../imgs/dog-wide.jpg';



const useStyles = makeStyles(theme => ({

    root: {
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${dogImage})`,
            height: `calc(${document.querySelector('html').offsetHeight}px - 56px)`,
            paddingTop: '50px'
        },
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${dogImage2})`,
            height: `calc(${document.querySelector('html').offsetHeight}px - 64px)`,
        },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '70px',
    }
}));

const BackgroundImage = props => {
    const classes = useStyles();

    return (    
            <div className={classes.root}>
                {props.children}
            </div>
    );
}

export default BackgroundImage;