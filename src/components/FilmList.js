import  React, {Component, Fragment} from 'react';
import Film from './Film';
// Containers have state and hold data(Componenets display data)

class FilmList extends Component {
  render(){
    const films = this.props.films.map((film, index) => {
      return (
        <Film key={index}
        url = {film.url}
        name={film.name}
        />
      );
    });
    return (
      <Fragment>
      <h1>Upcoming film releases for UK</h1>
      <hr></hr>
      {films}
      <hr></hr>
      <a href="https://www.imdb.com/calendar/?region=gb" className = "calendar_btn">View more upcoming releases</a>
      </Fragment>
    );
  }
}

export default FilmList;
