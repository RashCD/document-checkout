import { navigate } from '@reach/router';
import React, { useContext } from 'react';
import ButtonWithNotification from './ButtonWithNotification';
import Icon from './Icon';
import CartIcon from '../assets/icons/cart.svg';
import { CartContext } from '../context/CartContext';
import Styles from '../assets/styles/views/LandingPage.module.scss';

const AppLayout = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <header className={Styles.appHeader}>
      <h1>{process.env.REACT_APP_WEBSITE_NAME}</h1>
      <ButtonWithNotification
        count={cartCount}
        onButtonClick={() => navigate('/checkout')}
      >
        <Icon src={CartIcon} size={30} color="white" alt="cart icon" />
      </ButtonWithNotification>
    </header>
  );
};

export default AppLayout;
