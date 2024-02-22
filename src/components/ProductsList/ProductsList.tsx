import React, {useEffect, useState} from 'react';
import Sort from '../Sort/Sort';
import { Product } from '../../Types/Product';
import Card from '../Card/Card';
import './ProductsList.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useLocation } from 'react-router-dom';

type Props = {
  products: Product[];
}

const ProductsList:React.FC<Props> = ({ products }) => {
  console.log(products)
const [limits, setLimits] = useState(8);
const pathName = useLocation().pathname;

  const loadMore = () => {
     setLimits(limits + 4)
  }

  useEffect(() => {
    setLimits(8)
  }, [pathName])

  const sliceProducts = products && products.slice(0, limits)
  return (
    <div className="productsList">
      <Sort />
      <div className="productsList__wrapper">
        {sliceProducts.length > 0 ? (
          sliceProducts.map((prod) => (
          <Card product={prod} key={prod.id}/>
        ))) 
        : 'no products'
      }
      </div>

      <button
        className='productsList__button'
        onClick={() => loadMore()}
        disabled={limits > sliceProducts.length}
      >
        {(products.length) > limits ? 'Show more' : 'all products'}
        </button>
    </div>
  )
}

export default ProductsList