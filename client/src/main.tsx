import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainRouter } from './router/MainRouter';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
