import React from 'react';

import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  appBar: { boxShadow: 'none' },
  logo: { width: '6rem' },
  grow: { flexGrow: 1 },
  menuIcon: { marginRight: theme.spacing(0.6), marginLeft: theme.spacing(0) },
  icons: { marginRight: theme.spacing(0.8) },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img className={classes.logo} src="/images/preto.png" alt="logo" />

          <div className={classes.grow} />

          <IconButton className={classes.icons} color="inherit">
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <Apps />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
