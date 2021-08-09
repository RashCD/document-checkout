import { navigate } from '@reach/router';
import React, { useContext, useEffect, useState } from 'react';
import ButtonWithNotification from './ButtonWithNotification';
import Icon from './Icon';
import CartIcon from '../assets/icons/cart.svg';
import BackIcon from '../assets/icons/back.svg';
import { CartContext } from '../context/CartContext';
import Styles from '../assets/styles/components/AppLayout.module.scss';
import Button from './Button';

const MOBILE_SIZE = 500;

const AppLayout = (props: { title?: string }) => {
  const { cartCount } = useContext(CartContext);
  const isLanding = window.location.pathname === '/';
  const [isMobileSize, setIsMobileSize] = useState(
    window.innerWidth < MOBILE_SIZE ? true : false
  );
  const iconSize = isMobileSize ? 20 : 30;

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_SIZE}px)`);
    const onChangeListener = (event: MediaQueryListEvent) => {
      setIsMobileSize(event.matches);
    };

    mediaQuery.addEventListener('change', onChangeListener);

    return () => mediaQuery.removeEventListener('change', onChangeListener);
  }, []);

  return (
    <header className={Styles.appHeader}>
      {!isLanding && (
        <Button
          className={Styles.backButton}
          onButtonClick={() => navigate(-1)}
        >
          <>
            <Icon
              src={BackIcon}
              size={iconSize}
              color="white"
              alt="back icon"
            />
            BACK
          </>
        </Button>
      )}
      <h1 className={Styles.title}>{props.title || ''}</h1>
      {isLanding && (
        <ButtonWithNotification
          count={cartCount}
          onButtonClick={() => navigate('/checkout')}
        >
          <Icon src={CartIcon} size={iconSize} color="white" alt="cart icon" />
        </ButtonWithNotification>
      )}
    </header>
  );
};

export default AppLayout;
