import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom'; // Note 1

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </StrictMode>,
);
