import React from 'react';
import './Style.css'; // Import the CSS file for styling

const SearchBox = ({ searchfeild, searchChange}) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search robots"
        className="search-box__input"
        onChange={searchChange}
      />
      <button className="search-box__button">Search</button>
    </div>
  );
};

export default SearchBox;
