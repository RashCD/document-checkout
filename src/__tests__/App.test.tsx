import React from 'react';
import { render } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import App from '../App';

function renderWithRouter(
  ui: JSX.Element,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

describe('Full App component rendering / navigating', () => {
  test('should arrive at landing page on navigate to "/"', () => {
    const { container } = renderWithRouter(<App />);

    const appContainer = container;

    expect(appContainer.innerHTML).toMatch('Doc Shopper');
  });

  test('should navigate correctly from landing page to checkout page', async () => {
    const {
      container,
      history: { navigate },
    } = renderWithRouter(<App />);

    const appContainer = container;

    expect(appContainer.innerHTML).toMatch('Doc Shopper');

    await navigate('/checkout');

    expect(container.innerHTML).toMatch('Checkout');
  });

  test('should navigate to landing page when route is non-existent', async () => {
    const {
      container,
      history: { navigate },
    } = renderWithRouter(<App />);

    navigate('/non-existing-routes');

    expect(container).not.toBeEmptyDOMElement();

    expect(container).toHaveTextContent('Doc Shopper');
  });
});
