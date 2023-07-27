import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (evt) => {
    this.setState(
      () => ({ type: evt.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <div className="row search-input-row">
          <div className="input-field">
            <input
              placeholder="search"
              type="search"
              className="validate validate-search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
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
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
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
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
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
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </>
    );
  }
}

export { Search };
