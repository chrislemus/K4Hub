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
        desc: faker.lorem.words(20),
        img: faker.image.imageUrl(550, 300, 'people', true),
      });
      itemCount--;
    }
    return newsList;
  };

  const renderedNews = getNews().map((news) => (
    <NewsItem key={news.id} news={news} />
  ));

  return (
    <div className="news-list">
      <h1>Community News</h1>
      {renderedNews}
    </div>
  );
}
