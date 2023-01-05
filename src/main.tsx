import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global } from './GlobalStyle'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global/>
    <App />
    <ToastContainer/>
  </React.StrictMode>,
)
