import { AppBar, IconButton, Toolbar, Button, Switch } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';

function AppBarComponent() {
  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
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
  );
}

export default AppBarComponent;
