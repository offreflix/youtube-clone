import React from 'react';

import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Subscriptions from '@material-ui/icons/Subscriptions';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  appBar: { boxShadow: 'none', zIndex: theme.zIndex.drawer + 1 },
  logo: { width: '6rem' },
  drawer: { width: 240, flexShrink: 0 },
  drawerPaper: { width: 240, borderRight: 'none' },
  grow: { flexGrow: 1 },
  menuIcon: { marginRight: theme.spacing(0.6), marginLeft: theme.spacing(-2) },
  icons: { marginRight: theme.spacing(0.8) },
  listItem: { paddingTop: 5, paddingBottom: 5 },
  listItemText: { fontSize: 14 },
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

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={'Início'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={'Explorar'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<PlayArrowIcon />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={'Shorts'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<Subscriptions />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={'Inscrições'}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem classes={{ root: classes.listItem }} button>
              <ListItemIcon>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={'Biblioteca'}
              />
            </ListItem>
            <ListItem classes={{ root: classes.listItem }} button>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={'Histórico'}
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={4} pt={2}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircleOutlined />}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
        </div>
      </Drawer>
    </div>
  );
};

export default Home;
