import { RouteComponentProps } from '@reach/router';
import ProductList from '../components/ProductList';
import Styles from '../assets/styles/views/LandingPage.module.scss';
import AppLayout from '../components/AppLayout';

const LandingPage = (props: RouteComponentProps) => {
  return (
    <div className={Styles.app}>
      <AppLayout title={process.env.REACT_APP_WEBSITE_NAME} />
      <main className={Styles.appMain}>
        <ProductList />
      </main>
    </div>
  );
};

export default LandingPage;
