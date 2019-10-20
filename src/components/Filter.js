import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
    const { getFilterValue } = props;
    return (
    <input type="text" className="app__filter--field" placeholder= 'Filtra pokemons por nombre...' onChange={getFilterValue}/>
    );   
}

Filter.propTypes = {
    getFilterValue: PropTypes.func
}

export default Filter;
