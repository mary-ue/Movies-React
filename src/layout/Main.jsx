import React from 'react';
import { Movies } from '../components/Movies';

class Main extends React.Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=[key]&s=happy'
      );
      const data = await response.json();
      this.setState({ movies: data.Search });
      console.log(data.Search);
    } catch (err) {
      console.log('Ошибка при получении данных:', err);
    }
  }

  render() {
    const {movies} = this.state;

    return (
      <main className="content container">
      {
        movies.length ? 
        (<Movies movies={this.state.movies} />) : 
        <h3>Loading...</h3>
      }
        
      </main>
    );
  }
}


export { Main };
