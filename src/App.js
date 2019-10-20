import React from 'react';
import './stylesheets/index.scss';
import { fetchPokemons } from './services/fetchPokemons';
import Filter from './components/Filter';
import PokeList from './components/PokeList';

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
    this.setState({
      nameToFilter: currentName
    })
  }

  render() {
    const { allPokeData, nameToFilter } = this.state;
    return (
      <div className="app">
        <div className="circle left"></div>
        <div className="circle right"></div>
        <div className="triangle left"></div>
        <div className="triangle right"></div>
        <Filter 
        getFilterValue = { this.getFilterValue}
        />
        <PokeList
        allPokeData = { allPokeData }
        nameToFilter = { nameToFilter }
        />
      </div>
    );
  }
}


export default App;
