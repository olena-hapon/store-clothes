import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import './Home.scss';
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchProducts } from '../../redux/slices/products';
import Categoories from '../../components/Categories/Categoories';
import Banner from '../Banner/Banner';
import { setCategory, setSubCategory, setIsNew, setSales } from '../../redux/slices/filter';

const Home = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.products);
  const { category, subCategory, isNew, isSales, page, sort } = useAppSelector((state) => state.filters);

  // const location = useLocation().pathname;
  // const pathName = location.split('/').slice(1);
  // const categoryName = pathName[0];
  // const subcatName = pathName[1];
  // console.log(categoryName);


  // let newProducts = [...products].filter(product => product.isNew === true);
  
  useEffect(() => {

    dispatch(setIsNew(true));
    dispatch(setCategory(''))
    dispatch(setSubCategory(''))
    dispatch(setSales(''))

  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts({ category,subCategory,isNew, isSales, page, sort }))
   }, [isNew])

  return (
    <>
      <Slider />
      <ProductsSlider products={products} title='new models'/>
      <Categoories />
      <Banner />
      <ProductsSlider products={products} title='recommended' />
      <Banner />
    </>
  )
}

export default Home