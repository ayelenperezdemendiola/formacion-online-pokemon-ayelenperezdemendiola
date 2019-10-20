import React from 'react';

const Filter = (props) => {
    const { getFilterValue } = props;
    return (
    <input type="text" className="app__filter--field" placeholder= 'Filtra pokemons por nombre...' onChange={getFilterValue}/>
    );   
}

export default Filter;
