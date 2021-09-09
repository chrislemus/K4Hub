import { render } from '@testing-library/react';
import { QueryProvider } from '../App';

const renderWithQueryClientProvider = (ui, options) =>
  render(ui, { wrapper: QueryProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithQueryClientProvider as render };
