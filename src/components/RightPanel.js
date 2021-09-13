import React from 'react';
import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
  },
  title: {
    fontSize: 16,
    color: '#555',
    fontWeight: 500,
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
  },
}));

const RightPanel = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Now
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt='Remy Sharp'
          src='https://material-ui.com/static/images/avatar/1.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://material-ui.com/static/images/avatar/2.jpg'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://material-ui.com/static/images/avatar/3.jpg'
        />
        <Avatar
          alt='Agnes Walker'
          src='https://material-ui.com/static/images/avatar/4.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://material-ui.com/static/images/avatar/5.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://material-ui.com/static/images/avatar/6.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://material-ui.com/static/images/avatar/7.jpg'
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} cols={2} style={{ marginBottom: 20 }}>
        <ImageListItem>
          <img
            src='https://material-ui.com/static/images/image-list/burgers.jpg'
            alt='burger'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://material-ui.com/static/images/image-list/camera.jpg'
            alt='camera'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://material-ui.com/static/images/image-list/morning.jpg'
            alt='morning'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://material-ui.com/static/images/image-list/hats.jpg'
            alt='hats'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://material-ui.com/static/images/image-list/vegetables.jpg'
            alt='vegetables'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://material-ui.com/static/images/image-list/mushroom.jpg'
            alt='mushroom'
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href='#' className={classes.link} variant='body2'>
        News
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Music
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Life Styles
      </Link>
      <Divider flexItem style={{ marginBottom: 3 }} />
      <Link href='#' className={classes.link} variant='body2'>
        Movies
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Education
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Politics
      </Link>
    </Container>
  );
};

export default RightPanel;
