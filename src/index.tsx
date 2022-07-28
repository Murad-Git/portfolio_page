import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemesProvider from './store/themes.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </React.StrictMode>
);
