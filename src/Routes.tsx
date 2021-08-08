import React from 'react';
import { Router } from '@reach/router';
import LandingPage from './views/LandingPage';
import CheckoutPage from './views/CheckoutPage';

const Routes = () => {
  return (
    <Router>
      <LandingPage path="/" />
      <CheckoutPage path="/checkout" />
    </Router>
  );
};

export default Routes;
