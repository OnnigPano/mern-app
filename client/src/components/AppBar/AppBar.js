import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import TemporaryDrawer from '../TemporaryDrawer';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useStyles from './styles';

function HideOnScroll(props) {

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}


export default function SearchAppBar(props) {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <TemporaryDrawer drawerState={drawerState} toggleDrawer={toggleDrawer} />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Kimbalache Store
          </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Link component={RouterLink} to="/cart" >
              <IconButton
                edge="end"
                aria-label="go to cart"
              >
                <ShoppingCartOutlined style={{color: 'white'}}/>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>

      </HideOnScroll>

      <Toolbar />
    </div>
  );
}
