import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Hidden, IconButton, InputBase, Paper } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 44,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
  icons: {
      
  }
}));

function TopBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img src="./YouTube-Logo.png" alt="logo" className={classes.logo} />
        </Box>
        <Hidden mdDown>
        <Box>
          <Paper component="form" className={classes.search}>
            <InputBase
              className={classes.input}
              placeholder="Pesquisar"
              inputPorps={{ 'atial-label': 'search' }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        </Hidden>
        <Box display='flex'>
            <IconButton className={classes.icons}>
                <AppsIcon/>
            </IconButton>
            <IconButton className={classes.icons}>
                <MoreVertIcon/>
            </IconButton>
          <Button variant="outlined" color="secondary">
            <AccountCircleIcon />
             Fazer login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
