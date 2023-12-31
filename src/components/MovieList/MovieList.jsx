/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './Styles';
import { Movie } from '..';

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
