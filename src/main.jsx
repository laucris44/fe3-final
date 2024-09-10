import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import EstadosGlobalesProvider from "./Components/utils/global.context";
import './Components/Styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <EstadosGlobalesProvider>
      <App />
    </EstadosGlobalesProvider>
  </BrowserRouter>
);


