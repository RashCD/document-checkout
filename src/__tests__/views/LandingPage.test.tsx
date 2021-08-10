import React from 'react';
import {
  cleanup,
  findByText,
  fireEvent,
  getAllByRole,
  render,
} from '@testing-library/react';
import LandingPage from '../../views/LandingPage';
import { PRODUCT_DETAILS } from '../../util/product';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';

afterEach(cleanup);

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

describe('Landing page component test', () => {
  beforeEach(() => {
    renderWithRouter(<LandingPage />);
  });

  test('should contains "Doc Shopper"', async () => {
    expect(await findByText(document.body, 'Doc Shopper')).toHaveTextContent(
      'Doc Shopper'
    );
  });

  test('should have cart icon visible', async () => {
    const container = document.body;

    const cartButton = getAllByRole(container, 'button').find(
      (element) => element.className === 'button button'
    );

    expect(cartButton).toBeValid();

    expect(cartButton).toBeVisible();
  });

  test('should match number of product list', () => {
    const container = document.body;

    const totalProductList = PRODUCT_DETAILS.length;

    const matchElement = container.querySelector('.productList');

    expect(matchElement?.childElementCount).toEqual(totalProductList);
  });

  test('should shows the correct info in item listing', () => {
    const container = document.body;

    const productElement = container.querySelector('.productContainer');

    expect(productElement).toHaveTextContent('workflow');

    expect(productElement).toHaveTextContent('$199.99');

    expect(productElement?.lastElementChild?.childElementCount).toBe(2);
  });

  test('should add to cart count when clicking add to cart button', () => {
    const container = document.body;

    const addToCartButton = container.querySelector('.productAction')
      ?.firstChild as HTMLButtonElement;

    fireEvent.click(addToCartButton);

    expect(window.location.pathname).toBe('/');
  });

  test('should navigate to checkout page when clicking the buy now button', () => {
    const container = document.body;

    const buyNowButton = container.querySelectorAll(
      '.cta'
    )[1] as HTMLButtonElement;

    fireEvent.click(buyNowButton);

    expect(window.location.pathname).toBe('/checkout');
  });

  test('should match the snapshot', () => {
    const container = document.body;

    expect(container).toMatchSnapshot();
  });
});
