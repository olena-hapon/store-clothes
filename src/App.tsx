import React from 'react';
import './App.scss';
// import * as ReactDOM from "react-dom";
import {
  RouterProvider,
  Outlet,
  createHashRouter,
} from "react-router-dom";
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import ProductsContainer from './pages/ProductsContainer/ProductsContainer';
import SingleProductPage from './pages/SingleproductPage/SingleProductPage';
import { useAppDispatch, useAppSelector } from './redux/store';
import { setModal } from './redux/slices/filter';
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

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <ProductsContainer />,
      },
      {
        path: "/:category/:subcat",
        element: <ProductsContainer />,
      },
      {
        path: "/:category/:subcat/:id/:name",
        element: <SingleProductPage />,
      },
      {
        path: ":new/:category/:subcat/:id/:name",
        element: <SingleProductPage />,
      },
      // {
      //   path: "man",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "man/:id",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "man/:id/:name",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "new",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "new/woman",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "new/woman/:id",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "new/man",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "new/man/:id",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "sales",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "sales/woman",
      //   element: <ProductsContainer />,
      // },
      // {
      //   path: "sales/man",
      //   element: <ProductsContainer/>,
      // },
    ],
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(state => state.filters.modal)
  useEffect(() => {
    dispatch(setModal(false))
  },)
  return (
    <div className={!!modal ? 'app app__hidden' : 'app'}>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
