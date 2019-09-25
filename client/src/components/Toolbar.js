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
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { link } from 'fs';



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
  
  const sections = [
    {name:'Home', route:'/'},
    {name:'Skins', route:'/skins'},
    {name:'Inventory', route:'/inventory'},
    {name:'Contact', route:'/contact'},
    {name:'About', route:'/about'},
  
  ];
  
  const featuredPosts = [
    {
      title: 'Featured post',
      description:
        'Test',
    },
    {
      title: 'Post title',
      description:
        'testing',
    },
  ];

  export default function Blog() {
    const classes = useStyles();

  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <a href="https://steamcommunity.com/market/search?appid=489940">
            <Button size="small">Steam Market</Button>
            </a>
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
              <Link to={section.route}>
                {section.name}
              </Link>
            ))}
          </Toolbar>
        </Container>
      </React.Fragment>
    );
  }

