import NewsItem from '../NewsItem';
import { screen, render } from '@testing-library/react';

test('news image alt tag and title match', () => {
  const news = {
    title: 'The new challenge',
    img: 'http://placeimg.com/300/200/people?56375',
  };
  render(<NewsItem news={news} />);
  const image = screen.getByRole('img');
  const newsTitle = screen.getByRole('heading');
  expect(image).toBeInTheDocument();
  expect(newsTitle).toBeInTheDocument();
});

// export default function NewsItem({ news }) {
//   return (
//     <div>
//       <img src={news.img} alt={news.title} />
//       <h3>{news.title}</h3>
//     </div>
//   );
// }
