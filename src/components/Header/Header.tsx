import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import classNames from 'classnames';
import Search from '../Search/Search';
import help from '../../images/help-circle.svg';
import favorites from '../../images/favorites.svg';
import account from '../../images/outline-account.svg';
import cart from '../../images/outline-cart.svg';

const Header = () => {
  const { data } = useFetch("/categories");
  // useEffect(() => {}, [])

  return (
    <header className="header">
      <div className="header__sticky">
        <div className="header__wrapper">
          <div className="header__top">
            <div className="header__help">
              <Link className='header__link' to='/'>
                <img
                  src={help}
                  className='icon'
                  alt="header-help"
                />
                <span className="text">Help</span>
              </Link>
            </div>

            <Link
              className='logo'
              to='/'
            >
              <div>DeSire</div>
            </Link>

            <div className="header__top__right">
            <Link className='header__link' to='/'>
                <img
                  src={favorites}
                  className='icon'
                  alt="header-help"
                />
                <span className="text">Favorites</span>
              </Link>

              <Link className='header__link' to='/'>
                <img
                  src={account}
                  className='icon'
                  alt="header-help"
                />
                <span className="text">Account</span>
              </Link>
              <Link className='header__link' to='/'>
                <img
                  src={cart}
                  className='icon'
                  alt="header-help"
                />
                <span className="text">Cart</span>
              </Link>
            </div>

          </div>
          <div className="header__bottom">
            <div className="header__bottom__left-side">
              <nav className="nav">
                {!!data && (
                  data.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.attributes.title}
                      className={({isActive}) => classNames('nav__link', {
                        'nav__link--active': isActive
                      })}
                    >
                      {item.attributes.title}
                    </NavLink>
                  ))
                )}

                <Link
                  to='new'
                  className='nav__link'
                >
                  new
                </Link>

                <Link
                  to='sales'
                  className='nav__link'
                >
                  sales 50%
                </Link>
              </nav>
            </div>

            <Search />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header