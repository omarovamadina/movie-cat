// components/searchForm.js
import React, { useState } from 'react';
import Input from 'components/atoms/Input';
import style from './SearchForm.module.scss';
import { SearchIcon, ArrowTopRight } from 'components/atoms/Iconset';

const SearchForm = ({ heading, subHeading, onSearch, message }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <form onSubmit={handleSubmit} className={`${style.container} expose-container`}>
      <div className={style.header}>
        <div className={`${style.icon} ${style._allowCascade}`}><SearchIcon/></div>
        <h2 className={style.heading}>{heading}</h2>
      </div>

      <p className={style.subHeading}>{subHeading}</p>

      <Input className={style.input} value={searchTerm} onChange={handleInputChange} placeholder="Search for movies" />
      
      {message && <p className={style.message}>{message}</p>}
      
      <button type="submit" className={`${style.searchButton} ${style._allowCascade}`}><ArrowTopRight/></button>
    </form>
  );
};

export default SearchForm;

// searchForm.module.scss
/* Styles for the SearchForm component */