const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className="pokemon-type">Type: {pokemon.type}</div>
    </div>
  );
};

const PokemonType = PropTypes.exact({
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
});

Pokemon.propTypes = {
  pokemon: PokemonType,
};

// pokemon list
const PokemonList = ({ pokemons }) => {
  const list = pokemons.map((pokemon, i) => (
    <Pokemon pokemon={pokemon} key={i} />
  ));
  return <div className="pokemon-list">{list}</div>;
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PokemonType),
};
