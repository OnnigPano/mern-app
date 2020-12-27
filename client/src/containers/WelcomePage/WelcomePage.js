import React from 'react';
import CustomizedPaper from '../../components/CustomizedPaper';
import BackImg from '../../components/BackImg';
import Brand from '../../components/Brand/Brand';
import useStyles from './styles';

const Welcome = () => {

    const classes = useStyles();

    return (
        <BackImg>
            <div className={classes.wrapper}>
                <div>
                    <Brand />
                </div>

                <div className={classes.cards}>
                    <CustomizedPaper image="/puppy.jpg" category="Perros" target="/products" />
                    <CustomizedPaper image="/kitten.jpg" category="Gatos" target="/products" />
                    <CustomizedPaper image="/iguana.jpg" category="Reptiles" target="/products" />
                    <CustomizedPaper image="/accesorios.jpg" category="Accesorios" target="/products" />
                </div>
            </div>
        </BackImg>
    );
}

export default Welcome;