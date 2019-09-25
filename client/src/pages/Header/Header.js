import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fbattalion%2Fbattalion1944_hero-2580x1450-c31586a872fbc11e513d9788757220711c1caef0.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

// const sections = [
//   {name:'Featured', route:''},
//   {name:'Skins', route:'/skins'},
//   {name:'Inventory', route:'/inventory'},
//   {name:'Contact', route:'/contact'},
//   {name:'About', route:'/about'},
//   {name:'Home', rout: '/'}

// ];

const featuredPosts = [
  // {
  //   title: 'Battalion esports',
  //   link: '',
  //   description:
  //     '',
  // },
  {
    title: 'Steam News',
    href: 'https://store.steampowered.com/news/',
    description:
      '',
  },
];


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      * <Container maxWidth="lg">
        {/* <Toolbar className={classes.toolbar}>
          <Button size="small">Steam Market</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            B44 Skins
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section.name}
              variant="body2"
              to={section.route}
              className={classes.toolbarLink}
            >
              {section.name}
            </Link>
          ))}
        </Toolbar> */}
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://steamcdn-a.akamaihd.net/steam/apps/489940/header.jpg?t=1558714329"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Battalion 1944 Skin Marketplace
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Shop here.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid
              style={{marginLeft: 300}}
              item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="https://store.steampowered.com/news/">
                  <Card 
                    className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                          <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="http://www.userlogos.org/files/logos/jumpordie/steam_02.png"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
            {/* End main content */}
          </Grid>
        </main>
      </Container>
      <Divider />
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Battalion 1944 Skins
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            A functional public gaming market app designed for educational purposes only.
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}