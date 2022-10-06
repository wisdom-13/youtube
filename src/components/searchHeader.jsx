import React, { useRef } from 'react';

const SearchHeader = (props) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value;
    keyword && props.onSearch(keyword);
  }

  const onResetKeyword = () => {
    props.onResetKeyword();
  }

  return (
    <nav>
      <div className="logo" onClick={onResetKeyword}>YOUTUBE</div>
      <form className="searchBox" onSubmit={onSubmit}>
        <input ref={inputRef} type="text" placeholder="search" />
        <button>검색</button>
      </form>
    </nav>
  );
}

export default SearchHeader;