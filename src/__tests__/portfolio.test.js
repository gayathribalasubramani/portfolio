import React from 'react';
import { render } from '@testing-library/react';
import Portfolio from '../portfolio';

test('renders name', () => {
  const { getByText } = render(<Portfolio />);
  const name = getByText(/GAYATHRI BALASUBRAMANI/i);
  expect(name).toBeInTheDocument();
});
