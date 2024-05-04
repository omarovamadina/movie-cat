// pages/search.js

import React, { useState } from 'react';

import SearchForm from 'components/SearchForm';
import ThumbnailCard from 'components/ThumbnailCard';

import style from './Search.module.scss';

const movieApiUrl = process.env.REACT_APP_MOVIE_API;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (term) => {
    const trimmedTerm = term.trim();
    setSearchTerm(trimmedTerm);
    fetchSearchResults(trimmedTerm);
  };

  const fetchSearchResults = async (term) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${movieApiUrl}/movies/search?q=${encodeURIComponent(term)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      setError('An error occurred while fetching the search results.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${style.container} ${style._allowCascade} ${searchResults.length > 0 ? style.hasResults : ''}`}>
      <SearchForm onSearch={handleSearch} heading="Search" subHeading="You can search by movie title." />

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && searchTerm && searchResults.length === 0 && <div>No results found for "{searchTerm}"</div>}
      {!isLoading && !error && !searchTerm && <div>Please enter a search term to find movies.</div>}

      {!isLoading && !error && searchResults.length > 0 && (
        <div>
          <h2>Search Results for "{searchTerm}"</h2>
          <div className={`${style.grid} ${style._allowCascade}`}>
            {searchResults.map((movie) => (
              <ThumbnailCard key={movie._id} movie={movie} className={style.thumbnailCard} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;