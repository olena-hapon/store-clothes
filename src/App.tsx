import React from 'react';
import './App.scss';
// import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
// import Products from './pages/Products/Products';
// import Product from './pages/Product/Product';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main">
      <Outlet />
      </div>
      <Footer />
    </>
      
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Products />,
      },
      {
        path: "product/:id",
        // element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='app'>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
