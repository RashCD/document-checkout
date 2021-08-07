import { RouteComponentProps } from '@reach/router';
import ProductList from '../components/ProductList';
import Styles from '../assets/styles/views/LandingPage.module.scss';

const LandingPage = (props: RouteComponentProps) => {
  return (
    <div className={Styles.app}>
      <header className={Styles.appHeader}>
        <h1>{process.env.REACT_APP_WEBSITE_NAME}</h1>
      </header>
      <main className={Styles.appMain}>
        <ProductList />
      </main>
    </div>
  );
};

export default LandingPage;
