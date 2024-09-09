import { trpc, trpcClient } from '@/lib/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainRouter } from './router/MainRouter';
import './styles/index.css';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <MainRouter />
      </QueryClientProvider>
    </trpc.Provider>
  </StrictMode>
);
