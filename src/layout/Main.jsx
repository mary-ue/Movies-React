import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=[]&s=happy')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((err) => console.log('Ошибка при получении данных:', err));
  }

  searchMovies = (str, type = 'all') => {
    fetch(
      `http://www.omdbapi.com/?apikey=[]&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((err) => console.log('Ошибка при получении данных:', err));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
