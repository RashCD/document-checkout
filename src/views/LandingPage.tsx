import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import ProductList from '../components/ProductList';
import Icon from '../components/Icon';
import ButtonWithNotification from '../components/ButtonWithNotification';
import Styles from '../assets/styles/views/LandingPage.module.scss';
import CartIcon from '../assets/icons/cart.svg';
import { CartContext } from '../context/CartContext';

const LandingPage = (props: RouteComponentProps) => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className={Styles.app}>
      <header className={Styles.appHeader}>
        <h1>{process.env.REACT_APP_WEBSITE_NAME}</h1>
        <ButtonWithNotification count={cartCount} onButtonClick={() => {}}>
          <Icon src={CartIcon} size={30} color="white" alt="cart icon" />
        </ButtonWithNotification>
      </header>
      <main className={Styles.appMain}>
        <ProductList />
      </main>
    </div>
  );
};

export default LandingPage;
