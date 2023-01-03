import { ContentContextProvider } from './utils/ContentContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentContextProvider>
      <App />
    </ContentContextProvider>
  </React.StrictMode>,
);
