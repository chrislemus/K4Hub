import NewsList from '../NewsList';
import { screen, render } from '@testing-library/react';

test('news image alt tag and title match', () => {
  render(<NewsList />);
  const imagesAltList = screen.getAllByRole('img').map(({ alt }) => alt);
  const newsListTitles = screen
    .getAllByRole('heading')
    .map(({ textContent }) => textContent);
  expect(imagesAltList).toEqual(newsListTitles);
});
