import React from 'react';
import './App.scss';
// import * as ReactDOM from "react-dom";
import {
  RouterProvider,
  Outlet,
  createHashRouter,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import ProductsContainer from './pages/ProductsContainer/ProductsContainer';
import SingleProductPage from './pages/SingleproductPage/SingleProductPage';
import { useAppDispatch, useAppSelector } from './redux/store';
import { setModal } from './redux/slices/filter';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import UserAccount from './components/UserAccount/UserAccount';
// import Products from './pages/Products/Products';
// import Product from './pages/Product/Product';

const Layout = () => {
  const pathName = useLocation().pathname;
  console.log(pathName)
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      {pathName !== '/account' ? (
        <Footer />
      ) : ''}
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
        path: "cart",
        element: <Cart />
      },
      {
        path: "favorites",
        element: <Favorites />
      },
      {
        path: "account",
        element: <UserAccount />
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
  const modal = useAppSelector(state => state.filters.modal);
  const menuMobile = useAppSelector(state => state.filters.menuMobile);
  const menuSearch = useAppSelector(state => state.filters.menuSearch)

  // useEffect(() => {
  //   dispatch(setModal(false))
  // },)
  return (
    <div className={!!modal || !! menuMobile || !!menuSearch ? 'app app__hidden' : 'app'}>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
