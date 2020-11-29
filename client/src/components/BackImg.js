import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import dogImage from '../imgs/dog1.webp';
import dogImage2 from '../imgs/dog4.jpg';



const useStyles = makeStyles(theme => ({

    root: {
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${dogImage})`,
            height: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${dogImage2})`,
            height: 'calc(100vh - 64px)',
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
            <div className={classes.root} >
                {props.children}
            </div>
    );
}

export default BackgroundImage;