import { navigate, RouteComponentProps } from '@reach/router';
import React, { useContext, useEffect } from 'react';
import Styles from '../assets/styles/views/SuccessPage.module.scss';
import CTAButton from '../components/CTAButton';
import { CartContext } from '../context/CartContext';

const SuccessPage = (
  props: RouteComponentProps<{
    location: { state: { currency?: string; price?: string } };
  }>
) => {
  const currency = props.location?.state?.currency || '';
  const price = props.location?.state?.price || '';

  const { carts, deleteProduct } = useContext(CartContext);

  useEffect(() => {
    carts.forEach((cart) => deleteProduct(cart.productID));
  }, [carts, deleteProduct]);

  return (
    <div className="app">
      <div className={Styles.success}>
        <p className={Styles.title}>Thank you for your purchase</p>
        <p className={Styles.description}>You have paid</p>
        <p className={Styles.price}>
          {currency}
          {price}
        </p>
        <CTAButton
          className={Styles.successButton}
          onButtonClick={() => navigate('/')}
        >
          Back to HOME
        </CTAButton>
      </div>
    </div>
  );
};

export default SuccessPage;
