import React, { Component } from 'react';


class CardComponent extends Component {
  constructor() {
    super()
    this.state = {
      species: ['Fetching species...'],
      films: ['Loading films...']
    }
  }

  componentDidMount() {
    // SPECIES //
    fetch(this.props.species[0])
      .then(resp => resp.json())
      .then(json => this.setState({species: json.name}))

    // FILMS //

    const filmsArray = [];

    const fetchFilms = this.props.films.map((filmUrl, i) => fetch(filmUrl)
        .then(res => res.json())
        .then(data => {
          filmsArray.push(`0${data.episode_id} - ${data.title}`);
          filmsArray.sort();
        }));

    Promise.all(fetchFilms)
        .then(promisesArray => { this.setState({films:filmsArray}) })
        .catch((err) => console.log('error: ', err))


  }

  render() {
    const { name } = this.props;

    return (
      <div className='Card'>
        <h3>{ name }</h3>
        {/* <h4 style={{fontStyle: 'italic'}}>The species.name value should be shown below... not the url</h4> */}
        <h4>{ this.state.species }</h4>
        <div>Featured in:
          {/* <p style={{fontStyle: 'italic'}}>(movie titles should be show in the list below, not the urls...)</p> */}
            <ul>
              { this.state.films.map((film, i) => (
                <li key={i}>
                  { film }
                </li>
              ))}
            </ul>
        </div>
      </div>
    )
  }

}

export default CardComponent;
