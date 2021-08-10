import { navigate } from '@reach/router';
import React, { useContext } from 'react';
import Styles from '../assets/styles/components/CheckoutFooter.module.scss';
import { CartContext } from '../context/CartContext';
import { priceString, priceNumberFormat } from '../util/format';
import { PREFERENCES } from '../util/user';
import CTAButton from './CTAButton';

const CheckoutFooter = () => {
  const { total } = useContext(CartContext);

  const totalItem = Object.values(total)
    .map((data) => data.count > 0)
    .filter(Boolean).length;

  const totalPrice = Object.values(total)
    .map((data: { count: number; price: string }) => {
      const price = Number(data.price);
      return price > 0 ? priceNumberFormat(price) : 0;
    })
    .reduce((total, current) => priceNumberFormat(total + current), 0);

  return (
    <div className={Styles.footer}>
      <div className={Styles.total}>Total ({totalItem} item)</div>
      <div className={Styles.price}>
        {PREFERENCES.currency}
        {priceString.format(totalPrice)}
      </div>
      <CTAButton
        className={Styles.checkout}
        onButtonClick={() =>
          navigate('/success', {
            state: {
              currency: PREFERENCES.currency,
              price: priceString.format(totalPrice),
            },
          })
        }
      >
        Checkout
      </CTAButton>
    </div>
  );
};

export default CheckoutFooter;
