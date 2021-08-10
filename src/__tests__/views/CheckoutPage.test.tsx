import React from 'react';
import { render } from '@testing-library/react';
import CheckoutPage from '../../views/CheckoutPage';

describe('Test for checkout page', () => {
  test('should match snapshot of checkout page', () => {
    const container = render(<CheckoutPage />);

    expect(container).toMatchSnapshot();
  });
});
