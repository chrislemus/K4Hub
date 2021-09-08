import faker from 'faker';
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
  const img = faker.image.image();
  console.log(img);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
