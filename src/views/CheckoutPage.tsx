import { RouteComponentProps } from '@reach/router';
import React from 'react';
import AppLayout from '../components/AppLayout';

const CheckoutPage = (props: RouteComponentProps) => {
  return (
    <div>
      <AppLayout title="Checkout" />
      <p>CheckoutPage</p>
    </div>
  );
};

export default CheckoutPage;
