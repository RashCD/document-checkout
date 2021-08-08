import { navigate } from '@reach/router';
import React, { useContext } from 'react';
import ButtonWithNotification from './ButtonWithNotification';
import Icon from './Icon';
import CartIcon from '../assets/icons/cart.svg';
import BackIcon from '../assets/icons/back.svg';
import { CartContext } from '../context/CartContext';
import Styles from '../assets/styles/components/AppLayout.module.scss';
import Button from './Button';

const AppLayout = (props: { title?: string }) => {
  const { cartCount } = useContext(CartContext);
  const isLanding = window.location.pathname === '/';

  return (
    <header className={Styles.appHeader}>
      {!isLanding && (
        <Button
          className={Styles.backButton}
          onButtonClick={() => navigate(-1)}
        >
          <>
            <Icon src={BackIcon} size={30} color="white" alt="back icon" />
            BACK
          </>
        </Button>
      )}
      <h1>{props.title || ''}</h1>
      {!isLanding && <div />}
      {isLanding && (
        <ButtonWithNotification
          count={cartCount}
          onButtonClick={() => navigate('/checkout')}
        >
          <Icon src={CartIcon} size={30} color="white" alt="cart icon" />
        </ButtonWithNotification>
      )}
    </header>
  );
};

export default AppLayout;
