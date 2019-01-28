import  React, {Component, Fragment} from 'react';
import Film from './Film';

class FilmList extends Component {
  render(){
    const films = this.props.films.map((film, index) => {
      return (
        <Film key={index}
        //id={film.Id}
        url = {film.url}
        name={film.name}
        >
        </Film>
      );
    });
    return (
      <Fragment>
      {films}
      </Fragment>
    );
  }
}

export default FilmList;
