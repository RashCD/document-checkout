import { Suspense } from 'react';
import './assets/styles/global.scss';
import { CartProvider } from './context/CartContext';
import Routes from './Routes';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CartProvider>
        <Routes />
      </CartProvider>
    </Suspense>
  );
}

export default App;
