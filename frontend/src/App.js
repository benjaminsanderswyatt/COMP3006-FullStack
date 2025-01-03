import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router';

import Layout from './pages/Layout'; // Base for each page
import NoPage from './pages/NoPage'; // Any invalid page

import Login from './pages/Login';
import Store from './pages/Store';
import MyProducts from './pages/MyProducts';
import Account from './pages/Account';
import Cart from './pages/Cart';


import './styles/App.css';

// PrivateRoute you can only access if you have valid Json Web Token
const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token'); // Check for token in localStorage

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/" replace />;
  }

  // If token exists render route
  return <Outlet />;
};


const App = () => {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/*Default route login page*/}
          <Route index element={<Login />} />

          {/*Protected Routes*/}

          <Route path="store" element={<PrivateRoute />}>
            <Route index element={<Store />}/>
          </Route>

          <Route path="myproducts" element={<PrivateRoute />}>
            <Route index element={<MyProducts />}/>
          </Route>

          <Route path="account" element={<PrivateRoute />}>
            <Route index element={<Account />}/>
          </Route>

          <Route path="cart" element={<PrivateRoute />}>
            <Route index element={<Cart />}/>
          </Route>


          {/*Catch all invalid routes (404)*/}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    );
  };

export default App;
