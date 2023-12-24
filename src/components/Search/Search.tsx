import React, { ChangeEvent, useState } from 'react';
import './Search.scss';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className='search'>
      {searchValue ? (
        <img
          src="/images/Cross.svg"
          alt=""
          className='search__img'
          onClick={onClearSearch}
        />
        ): (
          <img
            src="/images/Search.svg"
            alt=""
            className='search__img'
          />
        )
      }


      <input
        type="text"
        placeholder='Search'
        className='search__input'
        value={searchValue}
        onChange={onChangeInput}
      />
    </div>
  )
}

export default Search