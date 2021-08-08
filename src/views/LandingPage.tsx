import { RouteComponentProps } from '@reach/router';
import ProductList from '../components/ProductList';
import Icon from '../components/Icon';
import Styles from '../assets/styles/views/LandingPage.module.scss';
import CartIcon from '../assets/icons/cart.svg';

const LandingPage = (props: RouteComponentProps) => {
  return (
    <div className={Styles.app}>
      <header className={Styles.appHeader}>
        <h1>{process.env.REACT_APP_WEBSITE_NAME}</h1>
        <Icon src={CartIcon} size={38} color="white" alt="cart icon" />
      </header>
      <main className={Styles.appMain}>
        <ProductList />
      </main>
    </div>
  );
};

export default LandingPage;
