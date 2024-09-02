import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainRouter } from './router/MainRouter.tsx';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
