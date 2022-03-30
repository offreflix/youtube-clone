import {
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
  Hidden,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Subscriptions from '@material-ui/icons/Subscriptions';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';

import AddCircle from '@material-ui/icons/AddCircle';

function LeftBarComponent({ classes }) {
  return (
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
  );
}

export default LeftBarComponent;
