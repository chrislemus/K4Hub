import NavPanel from '../NavPanel';
import { screen, render } from '@testing-library/react';

test('displays navigation button for news and notes', () => {
  render(<NavPanel />);
  const navItems = screen
    .getAllByRole('button')
    .map((item) => item.textContent);
  expect(navItems).toEqual(['News', 'Notes']);
});
