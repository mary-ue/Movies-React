import React, { useState } from 'react';

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (evt) => {
    setType(evt.target.dataset.type);
    searchMovies(search, evt.target.dataset.type);
  };

    return (
      <>
        <div className="row search-input-row">
          <div className="input-field">
            <input
              placeholder="search"
              type="search"
              className="validate validate-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() => searchMovies(search, type)}
            >
              Search
            </button>
          </div>
        </div>
        <div className="search-radio-btns">
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value=""
                data-type="all"
                onChange={handleFilter}
                checked={type === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="movie"
                data-type="movie"
                onChange={handleFilter}
                checked={type === 'movie'}
              />
              <span>Movie only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="series"
                data-type="series"
                onChange={handleFilter}
                checked={type === 'series'}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </>
    );
}

export { Search };
