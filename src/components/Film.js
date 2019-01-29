import React, {Component} from 'react';
// Containers have state and hold data(Componenets display data)

class Film extends Component{
  render(){
    return (
      <>
      <li>
      <a href={this.props.url}>{ this.props.name }</a>
      </li>
      </>
    );
  }
}

export default Film;
