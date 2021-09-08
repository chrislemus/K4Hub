import Header from '../Header';
import { screen, render } from '@testing-library/react';

test('displays header "K4Hub" text', () => {
  render(<Header />);
  const header = screen.getByRole('heading', { name: 'K4Hub' });
  expect(header).toBeInTheDocument();
});
