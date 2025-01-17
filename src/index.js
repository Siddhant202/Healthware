import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
// import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-i6n4cukc2d01oilh.us.auth0.com"
      clientId="qyUZNsw8VMwVlcxyhryPcjcwopELC9zU"
      authorizationParams={{
        redirect_uri: `http://localhost:3000/:id/dashboard`
      }}> */}

    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

