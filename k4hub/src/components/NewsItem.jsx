export default function NewsItem({ news }) {
  return (
    <div>
      <img src={news.img} alt={news.title} />
      <h3>{news.title}</h3>
    </div>
  );
}
