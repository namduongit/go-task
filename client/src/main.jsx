import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ToastProvider from './components/Toast/ToastProvider/ToastProvider.jsx';
import App from './App.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
)
