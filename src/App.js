import React from 'react';
import { fetchPokemons } from './services/fetchPokemons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokeData: [],
      loaded: false
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
      .then(info => {
        return (
          this.setState({
            allPokeData: info,
            loaded: true,
            nameToFilter: ''
          })
        );
      })
  }

  getFilterValue = (event) => {
    const currentName = event.currentTarget.value;
    console.log(currentName);
    this.setState({
      nameToFilter: currentName
    })
  }

  render() {
    const { allPokeData, nameToFilter } = this.state;
    return (
      <div className="app">
        <input type="text" className="app__filter--field" onChange={this.getFilterValue}/>
        <ul className="app__list">
          {allPokeData
          .filter( poke => poke.name.toUpperCase().includes(nameToFilter.toUpperCase()))
          .map((poke) => {
            return (
              <li className="list__item" key={poke.id}>
                <div className="item--container">
                  <img className="item--img" alt={`img--${poke.name}`} src={poke.sprites.front_default} />
                  <p className="item--id">{`ID/${poke.id}`}</p>
                  <h2 className="item--name">{poke.name}</h2>
                  <ul className="item--type__list">
                    {poke.types.map((type, index) => {
                      return (
                        <li className="type--item" key={`${type}--${index}`}>
                          <div className="type--container">
                            <p className="type--name">{type.type.name}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


export default App;
