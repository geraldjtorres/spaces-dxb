import React from 'react';
import './Searchbar.css';
import search from '../images/search.svg';

function Searchbar() {
  return (
    <div>
      <div className='search-field'>
        <img src={search} />
        <input type='text' placeholder='Search for spaces...'></input>
      </div>
    </div>
  );
}

export default Searchbar;
