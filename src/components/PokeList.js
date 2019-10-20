import React from 'react';
import PokeCard from './PokeCard';

const PokeList = (props) => {
    const { allPokeData, nameToFilter } = props;
    return (
        <ul className="app__list">
            {allPokeData
                .filter(poke => poke.name.toUpperCase().includes(nameToFilter.toUpperCase()))
                .map((poke) => {
                    return (
                        <li className="list__item" key={poke.id}>
                            <PokeCard
                                poke={poke}
                            />
                        </li>
                    );
                })}
        </ul>
    );
}

export default PokeList