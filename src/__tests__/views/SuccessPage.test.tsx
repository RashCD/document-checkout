import { render } from '@testing-library/react';
import React from 'react';
import SuccessPage from '../../views/SuccessPage';

describe('Test for success page', () => {
  test('should match snapshot of success page', () => {
    const container = render(<SuccessPage />);

    expect(container).toMatchSnapshot();
  });
});
