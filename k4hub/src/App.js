import NewsList from './components/NewsList';
import NavPanel from './components/NavPanel';
import { useState } from 'react';
function App() {
  const [activeNav, setActiveNav] = useState('news');
  return (
    <div>
      <div className="content-wrapper">
        <NavPanel activeNav={activeNav} navigate={(nav) => setActiveNav(nav)} />
        <div className="content">
          <h1 className="content-header">Community News</h1>
          <NewsList />
        </div>
      </div>
    </div>
  );
}

export default App;
