import React from 'react';

const PokeCard = (props) => {
    const { poke } = props;
    return (
        <div className="item--container">
            <div className="img--container">
                <img className="item--img" alt={`img--${poke.name}`} src={poke.sprites.front_default} />
                <p className="item--id">{`ID/${poke.id}`}</p>
            </div>
            <div className="item__description--container">
                <h2 className="item--name">{poke.name}</h2>
                <ul className="item--type__list">
                    {poke.types.map((type, index) => {
                        return (
                            <li className="type--item" key={`${type}--${index}`}>
                                <div className="type--container">
                                    <p className="type--name">{type.type.name}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default PokeCard;