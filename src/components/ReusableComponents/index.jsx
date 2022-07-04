import Pokemon from './Pokemon';

function ReusableComponents({ title }) {
  const pokemons = [
    { name: 'Pikachu', type: 'Eletric' },
    { name: 'Bulbasaur', type: 'Grass' },
    { name: 'Charmander', type: 'Fire' },
    { name: 'Squirtle', type: 'Water' },
  ];
  return (
    <div className="card">
      <h3>{title}</h3>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} name={pokemon.name} type={pokemon.type} />
      ))}
    </div>
  );
}

export default ReusableComponents;
