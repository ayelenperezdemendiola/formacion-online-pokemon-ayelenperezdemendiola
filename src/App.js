import React from 'react';
import { fetchPokemons } from './services/fetchPokemons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData = () => {
    fetchPokemons()
      .then(data => {
        return (
          this.setState({
            allData: data.results,
          })
        );
      })
  }

  render() {
    return (
      <div className="App">
        hola
      </div>
    );
  }
}

export default App;
