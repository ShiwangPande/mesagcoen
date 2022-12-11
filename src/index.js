import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom'
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

