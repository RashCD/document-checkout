import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';

const Routes = () => {
  return (
    <Router>
      <LandingPage path="/" />
    </Router>
  );
};

export default Routes;
