import React from 'react';
import './Searchbar.css';
import search from '../images/search.svg';
import plus from '../images/plus.svg';

function Searchbar() {
  return (
    <div className='search'>
      <div className='search-field'>
        <img src={search} />
        <input type='text' placeholder='Search for spaces...'></input>
      </div>
      <div className='filter-btn'>
        <span>Add filter</span>
        <img src={plus} alt='' />
      </div>
    </div>
  );
}

export default Searchbar;
