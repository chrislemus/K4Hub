export default function NewsItem({ news }) {
  return (
    <div className="box news-item">
      <div className="news-item-image">
        <img src={news.img} alt={news.title} />
      </div>
      <h3>{news.title}</h3>
      <p>
        {news.desc}{' '}
        <a style={{ color: 'blue' }} href="/">
          read more...
        </a>
      </p>
    </div>
  );
}
