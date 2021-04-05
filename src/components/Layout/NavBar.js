import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MovieIcon from '@material-ui/icons/Movie';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StarIcon from '@material-ui/icons/Star';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddinTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Ínicio', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trending', icon: WhatshotIcon },
  {
    id: 3,
    label: 'Inscrições',
    path: 'subscriptions',
    icon: SubscriptionsIcon,
  },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', path: 'biblioteca', icon: VideoLibraryIcon },
  { id: 2, label: 'Histórico', path: 'historico', icon: HistoryIcon },
];

const tertiaryMenu = [
  { id: 1, label: 'Música', path: 'musica', icon: MusicNoteIcon },
  { id: 2, label: 'Esportes', path: 'esportes', icon: DirectionsRunIcon },
  { id: 3, label: 'Jogos', path: 'jogos', icon: SportsEsportsIcon },
  { id: 4, label: 'Filmes', path: 'filmes', icon: MovieIcon },
  { id: 5, label: 'Notícias', path: 'noticias', icon: AnnouncementIcon },
  { id: 6, label: 'Ao vivo', path: 'aovivo', icon: LiveTvIcon },
  { id: 7, label: 'Aprender', path: 'aprender', icon: StarIcon },
  { id: 8, label: 'Videos do momento', path: 'momento', icon: ImportantDevicesIcon },
];

function NavBar() {
  const classes = useStyles();
  const router = useRouter();
  const isSelected = (item) => {
    return router.pathname === item.path;
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça o login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button variant="outlined" color="secondary">
            <AccountCircleIcon />
            Fazer login
          </Button>
        </Box>
      </Box>
      <Divider />
      <List>
        <Box mx={4} my={2}>
          <Typography variant="body2">
            O MELHOR DO YOUTUBE
          </Typography>
        </Box>

        {tertiaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
