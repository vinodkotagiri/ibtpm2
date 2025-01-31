import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './app/store.ts';
import { Toaster } from 'react-hot-toast';
import "gantt-task-react/dist/index.css";
import { BrowserRouter, Router } from 'react-router-dom';

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      <Toaster/>
    </Provider>
  </StrictMode>,
)
