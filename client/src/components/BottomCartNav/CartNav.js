import React from 'react';
import {
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';
import {
    CreditCardOutlined,
    AddBoxOutlined
} from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles';

function BottomNavCart(props) {

    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root} showLabels>
            <BottomNavigationAction to="/products" component={RouterLink} label="Ir de compras" icon={<AddBoxOutlined />} />
            <h3>${props.total}</h3>
            <BottomNavigationAction label="Pagar" icon={<CreditCardOutlined />} />
        </BottomNavigation>
    );
}

export default React.memo(BottomNavCart);