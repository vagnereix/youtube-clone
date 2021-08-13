import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  ListSubheader,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";

import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";
import ExploreIcon from "@material-ui/icons/Explore";

import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";

import AddCircle from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  btnLogin: {
    marginLeft: "auto",
  },
  iconMenu: {},
  icons: {},
  logo: {
    height: 30,
    marginLeft: theme.spacing(1.5),
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  drawerContainer: {},
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  ListItemIcon: {
    marginLeft: theme.spacing(1),
  },
  box: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  subHeader: {
    textTransform: "uppercase",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.iconMenu}
          >
            <MenuIcon color="action" />
          </IconButton>
          <img src="/images/preto.png" alt="Logo" className={classes.logo} />

          <div className={classes.btnLogin}>
            {/* <IconButton color="inherit" className={classes.icons}>
              <VideoCall />
            </IconButton> */}
            <IconButton color="inherit" className={classes.icons}>
              <Apps color="action" />
            </IconButton>
            <IconButton color="inherit" className={classes.icons}>
              <MoreVert color="action" />
            </IconButton>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AccountCircle />}
            >
              Fazer Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <HomeIcon />
              </ListItemIcon>

              <ListItemText
                primary={"Início"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>

            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <ExploreIcon />
              </ListItemIcon>

              <ListItemText
                primary={"Explorar"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>

            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <Subscriptions />
              </ListItemIcon>

              <ListItemText
                primary={"Inscrições"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <VideoLibrary />
              </ListItemIcon>

              <ListItemText
                primary={"Biblioteca"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>

            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <History />
              </ListItemIcon>

              <ListItemText
                primary={"Histórico"}
                classes={{
                  primary: classes.listItemText,
                }}
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
                startIcon={<AccountCircle />}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component="nav"
            subheader={
              <ListSubheader component="nav" className={classes.subHeader}>
                O melhor do YouTube
              </ListSubheader>
            }
          >
            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <AddCircle />
              </ListItemIcon>

              <ListItemText
                primary={"Música"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>

            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <AddCircle />
              </ListItemIcon>

              <ListItemText
                primary={"Esportes"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>

            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <AddCircle />
              </ListItemIcon>

              <ListItemText
                primary={"Jogos"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>

            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <AddCircle />
              </ListItemIcon>

              <ListItemText
                primary={"Filmes"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>

            <ListItem
              button
              classes={{
                root: classes.listItem,
              }}
            >
              <ListItemIcon
                classes={{
                  root: classes.ListItemIcon,
                }}
              >
                <AddCircle />
              </ListItemIcon>

              <ListItemText
                primary={"Notícias"}
                classes={{
                  primary: classes.listItemText,
                }}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
