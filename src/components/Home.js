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
  ListSubheader,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

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

import AddCircle from '@material-ui/icons/AddCircle';

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
}));

const videos = [
  {
    id: 1,
    title: 'Elden Ring: Começando bem',
    channel: 'Filipe Ramos',
    views: '385 mil visualizações',
    date: 'há 2 semana',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 2,
    title: 'Elden Ring - Guia Básico de Iniciantes',
    channel: 'Filipe Ramos',
    views: '365 mil visualizações',
    date: 'há 2 semana',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb2.jpg',
  },
  {
    id: 3,
    title: 'Pathologic 2: Um Diamante no Mundo dos Jogos',
    channel: 'Filipe Ramos',
    views: '3,5 mi de visualizações',
    date: 'há 1 ano',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb3.jpg',
  },
  {
    id: 4,
    title: 'Dark Souls 3: Começando Bem',
    channel: 'Filipe Ramos',
    views: '1,4 mi de visualizações',
    date: 'há 5 anos',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb4.jpg',
  },
  {
    id: 5,
    title: 'Fallout 76: Tudo que Você Precisa Saber (Desatualizado)',
    channel: 'Filipe Ramos',
    views: '1,4 mi de visualizações',
    date: 'há 3 anos',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb5.jpg',
  },
  {
    id: 6,
    title: 'Resident Evil 8: Resumo da Primeira Jogada (1/2)',
    channel: 'Filipe Ramos',
    views: '880 mil visualizações',
    date: 'há 10 semanas',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb6.jpg',
  },
  {
    id: 7,
    title: 'Resident Evil 2 Remake: Guia Para Rank S+ no Insano',
    channel: 'Filipe Ramos',
    views: '2,5 mi de visualizações',
    date: 'há 3 anos',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb7.jpg',
  },
  {
    id: 8,
    title:
      'Resident Evil 3 Remake: Eu Comparando Ele Com o Clássico e Reclamando Por Meia Hora',
    channel: 'Filipe Ramos',
    views: '1,4 mi de visualizações',
    date: 'há 1 anos',
    avatar: '/images/filipeRamos.jpg',
    thumb: '/images/thumb8.jpg',
  },
];

function Home(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img
            className={classes.logo}
            src={
              theme.palette.type === 'dark'
                ? '/images/branco.png'
                : '/images/preto.png'
            }
            alt="logo"
          />

          <div className={classes.grow} />

          <Switch
            value={props.darkMode}
            onChange={() => props.setDarkMode(!props.darkMode)}
            className={classes.icons}
          />

          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
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

      <Box display="flex">
        <Hidden mdDown>
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
              <Box p={4} pt={2} pb={2}>
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
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O Melhor do YouTube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Aprender'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Vídeos do momento'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360°'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
            </div>
          </Drawer>
        </Hidden>
        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 800, fontSize: 14 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={2}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Box display="flex">
                      <img
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '100%',
                        }}
                        alt={item.title}
                        src={item.avatar}
                      />
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="body1"
                        color="textPrimary"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
