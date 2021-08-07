import { Suspense } from 'react';
import './assets/styles/global.scss';
import Routes from './Routes';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes />
    </Suspense>
  );
}

export default App;
