import React, {Component} from 'react';
import CardContainer from './CardContainer';
import NavBar from './NavBar';
import Header from './Header';
import Loader from './Loader';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }

  }

  componentDidMount() {
    const url = 'https://swapi.co/api/people/';

    fetch(url)
      .then(response => response.json())
      .then(people => this.setState({ data: people.results }))
      
    }



  render() {
    const { data } = this.state;
    return (
      <div className='App'>
          {/*<NavBar /> */}
          <Header />
          {
            data.length === 0
            ? <Loader />//<h3>Loading Cards...</h3>
            : <CardContainer data={data} />//<h3>Cards Count: {data.length}</h3>
          }
          
      </div>
    );
  }
}

export default App;