import NewsList from './components/NewsList';
import NotesList from './components/NotesList';
import NavPanel from './components/NavPanel';
import { QueryClient, QueryClientProvider } from 'react-query';
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
  const queryClient = new QueryClient();
  return (
    <div className="content-wrapper">
      <QueryClientProvider client={queryClient}>
        <NavPanel activeNav={activeNav} navigate={(nav) => setActiveNav(nav)} />
        <div className="content">
          <h1 className="content-header">{title}</h1>
          <Component />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
