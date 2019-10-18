import React from 'react';
import { fetchPokemons } from './services/fetchPokemons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokeData: []
    }
  }

componentDidMount() {
  this.getAllData();
}

getAllData = () => {
  fetchPokemons()
    .then(data => {
      const allPokeInfo = data.results.map((item) => {
        return fetch(item.url)
          .then(response => response.json());
      });
      return Promise.all(allPokeInfo);
    })
    .then(info => console.log(info))

}

render() {
  return (
    <div className="app">
      <ul className="app__list">
        hola
        </ul>
    </div>
  );
}
}


export default App;
