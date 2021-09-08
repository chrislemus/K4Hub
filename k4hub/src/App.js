import NewsList from './components/NewsList';
import Header from './components/Header';
import NavPanel from './components/NavPanel';
function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <NavPanel />
        <NewsList />
      </div>
    </div>
  );
}

export default App;
