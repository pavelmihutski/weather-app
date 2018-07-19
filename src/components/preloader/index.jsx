import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import classes from './styles.css';

const Preloader = () => (
  <div className={classes.preloader}>
    <LinearProgress color="secondary" variant="query" />
  </div>
);

export default Preloader;
