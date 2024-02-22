import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs.tsx/BreadCrumbs';
import SingleProductDetails from '../../SingleProductDetails/SingleProductDetails';
import './SingleProductPage.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchSingleProduct } from '../../redux/slices/singleProduct';
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider';
import { Product } from '../../Types/Product';
import './SingleProductPage.scss';

const SingleProductPage = () => {
  const [filterProducts, setFilterProducts] = useState<Product[]>([])
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { subCategory, category } = useAppSelector(state => state.filters)
  const singleProduct = useAppSelector(state => state.singleProduct.product);
  const products = useAppSelector(state => state.products.products);
  console.log(singleProduct);

  useEffect(() => {
    const filterProducts = products.filter(item => item.category === category && item.subCategory === subCategory);
    setFilterProducts(filterProducts)
  }, [id])


  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id])

  return (
    <div className='singleProductPage app__section'>
      <div className="singleProductPage__wrapper">
        <BreadCrumbs />
        <SingleProductDetails singleProduct={singleProduct} />
        <ProductsSlider products={filterProducts} title='recommended' />
      </div>
    </div>
  )
}

export default SingleProductPage
