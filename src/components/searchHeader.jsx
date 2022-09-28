import React from 'react';

const SearchHeader = (props) => {
  return (
    <nav>
      <div className="logo">YOUTUBE</div>
      <div className="searchBox">
        <input type="text" placeholder="search" />
        <button>검색</button>
      </div>
    </nav>
  );
}

export default SearchHeader;