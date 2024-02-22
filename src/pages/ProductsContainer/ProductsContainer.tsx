import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs.tsx/BreadCrumbs';
import './ProductsContainer.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import filter, { setCategory, setSubCategory, setIsNew, setSales, setFromSearch } from '../../redux/slices/filter';
import { fetchProducts } from '../../redux/slices/products';
import { fetchCategory } from '../../redux/slices/category';

import Filters from '../../components/Filters/Filters';
import ProductsList from '../../components/ProductsList/ProductsList';
import { Product } from '../../Types/Product';

export const getFiltersByColors = (products, filterColors, filterSizes) => {
  let filterBy;
  // let filterBySizes;

  if (filterColors.length === 0 && filterSizes.length === 0) {
    return products;
  }

  if (filterColors.length > 0 && filterBy) {
    console.log(' go in colors 1')
    filterBy = filterBy.filter(el => filterColors.includes(el.color))
    // return filterByColor;
  } else if (filterColors.length > 0 && !filterBy) {
    console.log(' go in colors 2', filterBy)
    filterBy = products.filter(el => filterColors.includes(el.color))
    // return filterByColor;
  }

  if (filterSizes.length > 0 && filterBy) {
    console.log('go in sizes 1', filterBy)
    filterBy.reduce((ac, value) => {

      value.aviable.filter(el => {
        if (filterSizes.includes(el.size)) {
          ac.push(value);
          console.log(ac)

        }
      }
      )
      // filterBy = ac;
      filterBy = ac;
      return filterBy = Array.from(new Set(filterBy));
    }, [])
    console.log(filterBy)

  } else if (filterSizes.length > 0 && !filterBy) {
    console.log('go in sizes 2')
    products.reduce((ac, value) => {
      value.aviable.filter(el => {
        if (filterSizes.includes(el.size)) {
          ac.push(value);
          // filterBy = ac;
          console.log(filterBy)
        }
      }
      )
      filterBy = ac;
      return filterBy = Array.from(new Set(filterBy));
    }, [])
    //  return filterBySizes;
  }
  console.log(filterBy)
  return filterBy;

}

const ProductsContainer = () => {
  const [prod, setProd] = useState<Product[]>([]);
  const location = useLocation().pathname;
  const pathName = location.split('/').slice(1);
  const categoryName = pathName[0];
  const subcatName = pathName[1];
  const isSearch = useRef(false);

  //-----fromSearchParams----////
  const [searChParams, setSearchParams] = useSearchParams();
  const price = searChParams.get('price' || '');
  const colors = searChParams.getAll('color' || '');
  const sizes = searChParams.getAll('size' || '');

  const dispatch = useAppDispatch();
  const { category, subCategory, isNew, isSales, page, filterColors, filterSizes, sort } = useAppSelector((state) => state.filters);
  const { products } = useAppSelector((state) => state.products);
  console.log(location)

  const { category: categoryLinks } = useAppSelector(state => state.category);

  useEffect(() => {
    if (location) {
      if (categoryName === 'new') {
        dispatch(setFromSearch({
          category: subcatName ? subcatName : '',
          subCategory: '',
          filterSizes: sizes,
          filterColors: colors,
          isNew: true,
          isSales: '',
          sort: price,
        }))
      }
      if (categoryName === 'sales') {
        dispatch(setFromSearch({
          category: subcatName ? subcatName : '',
          subCategory: '',
          filterSizes: sizes,
          filterColors: colors,
          isNew: '',
          isSales: 50,
          sort: price,
        }))
      }

      if (categoryName !== 'new' && categoryName !== 'sales') {
        dispatch(setFromSearch({
          category: categoryName,
          subCategory: subcatName === undefined ? '' : subcatName,
          filterSizes: sizes,
          filterColors: colors,
          isNew: '',
          isSales: '',
          sort: price,
        }))
      }

      isSearch.current = true;
    }
  }, [])


  useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchProducts({ category, subCategory, isNew, isSales, page, sort }))
    }

    isSearch.current = false;
  }, [dispatch, category, subCategory, isNew, sort])


  useEffect(() => {
    let filtered = getFiltersByColors(products, filterColors, filterSizes);
    setProd(filtered)
  }, [products, filterColors, location, filterSizes, sort])
  console.log(prod)

  useEffect(() => {
    dispatch(fetchCategory())
  }, [location, dispatch])

  const mainCategory = categoryLinks.filter((cat) => cat.title === categoryName)

  return (
    <section className='productsContainer app__section'>
      <div className="breadcrumbs">
        <BreadCrumbs />
      </div>

      <div className="sideBar">
        <Filters links={mainCategory} />
      </div>

      <div className="rightSide">
        <ProductsList products={prod} />
      </div>
    </section>
  )
}

export default ProductsContainer