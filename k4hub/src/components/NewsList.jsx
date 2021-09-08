import NewsItem from './NewsItem';
import faker from 'faker';

const randomId = () => Math.random().toString(36).substr(2, 5);

export default function NewsList() {
  const getNews = (itemCount = 10) => {
    const newsList = [];
    while (itemCount > 0) {
      newsList.push({
        id: randomId(),
        title: faker.lorem.words(8),
        img: faker.image.imageUrl(300, 200, 'people', true),
      });
      itemCount--;
    }
    return newsList;
  };

  const renderedNews = getNews().map((news) => (
    <NewsItem key={news.id} news={news} />
  ));

  return <div>{renderedNews}</div>;
}
