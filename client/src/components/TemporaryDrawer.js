import React, { useContext } from 'react';
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
import {
  StoreOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  InfoOutlined,
  /* PersonAdd,
  VpnKey */
  DnsOutlined,
  PowerSettingsNew,
  MeetingRoomOutlined,
  AccountBoxOutlined
} from '@material-ui/icons';
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
      {/* <ListItemLink to={{pathname: "/auth", state: {isLogin: true}}} primary="Iniciar Sesión" icon={<VpnKey/>} /> */}
      <ListItemLink to="/auth" primary="Ingresar" icon={<MeetingRoomOutlined />} />
    </div>
  );

  const logOutButton = (
    <ListItemLink to="/logout" primary="Cerrar Sesión" icon={<PowerSettingsNew />} />
  );

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer}
    >
      <List>
        <ListItem>
          <Avatar src={authContext.user.profileImage} className={classes.avatar} />
          <Typography variant="subtitle1" component="h4">
            {authContext.isAuth ? authContext.user.name : 'Bienvenido'}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        {!authContext.isAuth ? authButtons : logOutButton}
      </List>
      <Divider />
      <List>
        {authContext.isAuth ? <ListItemLink to="/profile" primary="Mi Cuenta" icon={<AccountBoxOutlined />} /> : null}
        <ListItemLink to="/products" primary="Productos" icon={<StoreOutlined />} />
        <ListItemLink to="/categories" primary="Categorias" icon={<DnsOutlined />} />
        <ListItem button component={Link} to="/favs">
          <ListItemIcon> <FavoriteBorderOutlined /> </ListItemIcon>
          <ListItemText primary="Favoritos" />
        </ListItem>
        <ListItem button component={Link} to="/cart">
          <ListItemIcon> <ShoppingCartOutlined /> </ListItemIcon>
          <ListItemText primary="Mi Carrito" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/about">
          <ListItemIcon> <InfoOutlined /> </ListItemIcon>
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
