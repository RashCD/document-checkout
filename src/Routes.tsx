import React from 'react';
import { Redirect, Router } from '@reach/router';
import LandingPage from './views/LandingPage';
import CheckoutPage from './views/CheckoutPage';
import SuccessPage from './views/SuccessPage';

const Routes = () => {
  return (
    <Router>
      <LandingPage path="/" />
      <CheckoutPage path="/checkout" />
      <SuccessPage path="/success" />
      <Redirect noThrow from="/*" to="/" />
    </Router>
  );
};

export default Routes;
