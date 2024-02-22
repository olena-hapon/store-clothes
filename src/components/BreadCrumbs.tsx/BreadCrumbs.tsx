import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
  const location = useLocation().pathname;
  const pathName = location.split('/').slice(1);
  pathName.splice(2, 1);
 
  return (
    <div className='breadCrumbs'>
      <span className="breadCrumbs__home">
        <Link to='/' className="breadCrumbs__home--link">
          DeSire
        </Link>
      </span>
      {pathName.map((item, ind) => (
        <span className="breadCrumbs__name" key={ind}>
          <Link to={`./../../../${item}`} className="breadCrumbs__link">
            {item.replaceAll('-', ' ')}
          </Link>
        </span>
      ))}
    </div>
  )
}

export default BreadCrumbs