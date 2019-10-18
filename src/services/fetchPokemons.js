const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const fetchPokemons = () => {return (fetch(ENDPOINT).then(response => response.json()));};

export {fetchPokemons};