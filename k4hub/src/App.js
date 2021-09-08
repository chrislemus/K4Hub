import NewsList from './components/NewsList';
import NotesList from './components/NotesList';
import NavPanel from './components/NavPanel';
import { useState } from 'react';
const content = {
  news: {
    title: 'Community News',
    component: NewsList,
  },
  notes: {
    title: 'Your Daily Notes',
    component: NotesList,
  },
};

function App() {
  const [activeNav, setActiveNav] = useState('news');
  const { title, component: Component } = content[activeNav];
  return (
    <div>
      <div className="content-wrapper">
        <NavPanel activeNav={activeNav} navigate={(nav) => setActiveNav(nav)} />
        <div className="content">
          <h1 className="content-header">{title}</h1>
          <Component />
        </div>
      </div>
    </div>
  );
}

export default App;
