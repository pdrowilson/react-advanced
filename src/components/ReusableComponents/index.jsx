import Pokemon from './Pokemon';

function ReusableComponents({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <Pokemon name="Pikachu" type="Eletric" />
      <Pokemon name="Bulbasaur" type="Grass" />
      <Pokemon name="Charmander" type="Fire" />
      <Pokemon name="Squirtle" type="Water" />
    </div>
  );
}

export default ReusableComponents;
