import { useState } from 'react';

function Forms({ title }) {
  const [character, setCharacter] = useState('');
  const [charClass, setCharClass] = useState('');

  const handleSubmit = (event) => {
    event.prevent.default();
    console.log('sending form...');
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="mini-card">
        <strong>Character Name: </strong>
        {character}
      </div>
      <div className="mini-card">
        <p>
          <strong>Character Class: </strong>
          {charClass}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Character Name"
            onChange={(e) => setCharacter(e.target.value)}
            value={character}
          />
        </label>
        <label htmlFor="charClass">
          Class:
          <input
            type="text"
            name="charClass"
            placeholder="Character Class"
            onChange={(e) => setCharClass(e.target.value)}
            value={charClass}
          />
        </label>
      </form>
    </div>
  );
}

export default Forms;
