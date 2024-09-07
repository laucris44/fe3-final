import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import EstadosGlobalesProvider from "./Components/utils/global.context";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <EstadosGlobalesProvider>
      <MainLayout />
    </EstadosGlobalesProvider>
  </BrowserRouter>
);


