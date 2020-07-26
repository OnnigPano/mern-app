import React, { useContext } from'react';
import { AuthContext } from '../context/auth-context';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Avatar, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Store, Favorite, ShoppingCart, Info, PersonAdd, VpnKey } from '@material-ui/icons';
import ListItemLink from './ListItemLink';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  avatar: {
    width: 70,
    height: 70,
    marginRight: 10
  }
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  const authButtons = (
    <div>
      {/* <ListItem button component={Link} to="/auth">
        <ListItemIcon> <PersonAdd/> </ListItemIcon>
        <ListItemText primary="Registrarse" />
      </ListItem>
      <ListItem button component={Link} to="/auth">
        <ListItemIcon> <VpnKey/> </ListItemIcon>
        <ListItemText primary="Iniciar Sesión" />
      </ListItem> */}
      <ListItemLink to="/auth" primary="Iniciar Sesión" icon={<VpnKey/>} />
      <ListItemLink to="/auth" primary="Registrarse" icon={<PersonAdd/>} />
    </div>
  );

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer}
    > 
      <List>
        <ListItem>
          <Avatar src={authContext.profileImage} className={classes.avatar} />
          <Typography variant="subtitle1" component="h4">
            {authContext.isAuth ? authContext.name : 'Bienvenido'}
          </Typography>
        </ListItem>
        {!authContext.isAuth ? authButtons : null}
      </List>
      <Divider />
      <List>
          {/* <ListItem button component={Link} to="/productos">
            <ListItemIcon> <Store/> </ListItemIcon>
            <ListItemText primary="Productos" />
          </ListItem> */}
          <ListItemLink to="/products" primary="Productos" icon={<Store/>} />
          <ListItem button component={Link} to="/favs">
            <ListItemIcon> <Favorite/> </ListItemIcon>
            <ListItemText primary="Favoritos" />
          </ListItem>
          <ListItem button component={Link} to="/cart">
            <ListItemIcon> <ShoppingCart/> </ListItemIcon>
            <ListItemText primary="Mi Carrito" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/about">
            <ListItemIcon> <Info/> </ListItemIcon>
            <ListItemText primary="Nosotros" />
          </ListItem>
      </List>
      
    </div>
  );

  return (
          <Drawer anchor='left' open={props.drawerState} onClose={props.toggleDrawer}>
            {list}
          </Drawer>
      );
}
