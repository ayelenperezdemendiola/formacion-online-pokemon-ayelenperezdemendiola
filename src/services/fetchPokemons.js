const ENDPOINT = 'https://pokeapi.co/api/v2/ability/?limit=25&offset=25';

const fetchPokemons = () => {return (fetch(ENDPOINT).then(response => response.json()));};

export {fetchPokemons};