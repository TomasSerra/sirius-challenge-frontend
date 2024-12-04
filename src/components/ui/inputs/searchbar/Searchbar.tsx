import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './Searchbar.module.scss';

type SearchBarProps = {
    width?: string;
    placeholder?: string;
    onSearch?: (query: string) => void;
}

const SearchBar= ({ placeholder = "Search Game", onSearch=()=>{}, width="100%" }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(query);
    }
  };

  return (
    <div 
        className={styles.container}
        style={{width: width}}
    >
      <span className={styles.icon}>
        <IoSearch />
      </span>

        <input
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={styles.input}
        />
    </div>
  );
};

export default SearchBar;
