import NewsList from './components/NewsList';

function App() {
  // const generateImages = (number) => {
  //   const images = [];
  //   while (number !== 0) {
  //     const value = faker.image.image();
  //     images.push(value);
  //     number--;
  //   }
  //   return images;
  // };
  // const imgs = [faker.image.people(), faker.image.people()];
  // console.log(imgs);
  return (
    <div>
      <NewsList />
    </div>
  );
}

export default App;
