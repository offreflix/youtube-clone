import React from 'react';

import AppBarComponent from './AppBarComponent';
import LeftBarComponent from './LeftBarComponent';

import { makeStyles, Box } from '@material-ui/core';
import { useTheme, alpha } from '@material-ui/core/styles';
import VideosComponents from './VideosComponents';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh', background: theme.palette.background.dark },
  appBar: { boxShadow: 'none', zIndex: theme.zIndex.drawer + 1 },
  logo: { width: '6rem' },
  drawer: { width: 240, flexShrink: 0 },
  drawerPaper: { width: 240, borderRight: 'none' },
  grow: { flexGrow: 1 },
  menuIcon: { marginRight: theme.spacing(0.6), marginLeft: theme.spacing(-2) },
  icons: { marginRight: theme.spacing(0.8) },
  listItem: { paddingTop: 5, paddingBottom: 5 },
  listItemText: { fontSize: 14 },
  subheader: { textTransform: 'uppercase', fontWeight: 'bold' },
  teste: { fontSize: 14 },
  videoContainer: { cursor: 'pointer' },

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  '@global': {
    '*': {
      scrollbarWidth: 'auto',
      scrollbarColor:
        theme.palette.type === 'dark' ? '#6C6C6C #ffffff' : '#6C6C6C #ffffff',
    },

    /* Chrome, Edge, and Safari */
    '*::-webkit-scrollbar': {
      width: '14px',
    },

    '*::-webkit-scrollbar-track': {
      background: theme.palette.background.dark,
    },

    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6C6C6C',
      borderRadius: '10px',
      border: `3px solid ${theme.palette.background.dark}`,
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    border: '1px solid',
    borderColor: theme.palette.type === 'dark' ? '#222222' : 'lightGray',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '55ch',
      },
    },
  },
}));

function Home(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBarComponent
        theme={theme}
        classes={classes}
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
      />

      <Box display="flex">
        <LeftBarComponent classes={classes} />

        <VideosComponents classes={classes} />
      </Box>
    </div>
  );
}

export default Home;
