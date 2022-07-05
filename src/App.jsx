import './App.css';
import { useState } from 'react';
import doggy from './assets/dog.jpg';
import ListRender from './components/ListRender';
import Counter from './components/Counter';
import ConditionalRender from './components/ConditionalRender';
import ReusableComponents from './components/ReusableComponents';
import PropChildren from './components/PropChildren';
import PropFunction from './components/PropFunction';
import StateLift from './components/StateLift';
import ChangeSpell from './components/StateLift/ChangeSpell';
import Forms from './components/Forms';

function App() {
  const [pokemonCaught, setPokemonCaught] = useState('');
  const [spell, setSpell] = useState('');

  const catchPokemon = (pokemon) => {
    setPokemonCaught(pokemon);
  };

  const castSpell = (spellCasted) => {
    setSpell(spellCasted);
  };

  return (
    <div className="main">
      <h1>React Playground</h1>
      <div className="img-card">
        <img src={doggy} alt="Man's best friend" />
      </div>
      <Forms title="Forms" user={{ name: 'PWill', charClass: 'Warrior' }} />
      <StateLift title="State Lift" spell={spell} />
      <ChangeSpell title="(State Lift) - Change Spell" castSpell={castSpell} />
      <Counter title="Counter" />
      <ListRender title="List Render" />
      <ConditionalRender title="Conditional Rendering" />
      <ReusableComponents title="Reusable Components" />
      <PropChildren title="Prop Children Component">
        <p>Hey... Im a children!</p>
      </PropChildren>
      <PropFunction title="Function through props" catchPokemon={catchPokemon} pokemonCaught={pokemonCaught} />
    </div>
  );
}

export default App;
