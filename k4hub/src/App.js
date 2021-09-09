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

export function QueryProvider({ children, ...rest }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} {...rest}>
      {children}
    </QueryClientProvider>
  );
}

function App() {
  const [activeNav, setActiveNav] = useState('news');
  const { title, component: Component } = content[activeNav];
  return (
    <div className="content-wrapper">
      <QueryProvider>
        <NavPanel activeNav={activeNav} navigate={(nav) => setActiveNav(nav)} />
        <div className="content">
          <h1 className="content-header">{title}</h1>
          <Component />
        </div>
      </QueryProvider>
    </div>
  );
}

export default App;
