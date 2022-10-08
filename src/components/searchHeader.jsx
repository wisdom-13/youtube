import React, { useRef } from 'react';
import styles from './video.module.css';

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
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={onResetKeyword}>YOUTUBE</div>
      <form className={styles.searchBox} onSubmit={onSubmit}>
        <input ref={inputRef} type="text" placeholder="검색" />
        <button>검색</button>
      </form>
    </nav>
  );
}

export default SearchHeader;