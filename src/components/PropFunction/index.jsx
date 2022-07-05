/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

function PropFunction({ title, catchPokemon, pokemonCaught }) {
  const [caught, setCaught] = useState(false);

  const handleCaughtFunction = (pokemon) => {
    const chance = Math.random() < 0.5;
    catchPokemon(pokemon);
    setCaught(chance);
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>A wild pokemon appears</p>
      {(pokemonCaught && caught) && (<strong>Gotcha! {pokemonCaught} was cauth!</strong>)}
      {(pokemonCaught && !caught) && <strong>Oh no! The wild {pokemonCaught} fled.</strong>}
      <div>
        <button className="btn" type="button" onClick={() => handleCaughtFunction('Squirtle')}>Trow Pokeball</button>
      </div>
    </div>
  );
}

export default PropFunction;
