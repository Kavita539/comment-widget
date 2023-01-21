import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CommentProvider } from './context/CommentProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentProvider>
      <App />
    </CommentProvider>
  </React.StrictMode>,
)
