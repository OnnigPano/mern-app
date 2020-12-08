import React from 'react';
import {
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';
import {
    CreditCardOutlined,
    AddBoxOutlined
} from '@material-ui/icons';
import useStyles from './styles';

function BottomNavCart() {

    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root} showLabels>
            <BottomNavigationAction label="Ir de compras" icon={<AddBoxOutlined />} />
            <h3>$156.00</h3>
            <BottomNavigationAction label="Pagar" icon={<CreditCardOutlined />} />
        </BottomNavigation>
    );
}

export default BottomNavCart;