import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { authStore } from './store/authStore.js';
import {Provider} from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={authStore}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
