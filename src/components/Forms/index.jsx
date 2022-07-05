import { useState } from 'react';

function Forms({ title, user }) {
  const [character, setCharacter] = useState(user ? user.name : '');
  const [charClass, setCharClass] = useState(user ? user.charClass : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('character created successfully...', character, charClass);

    setCharacter('');
    setCharClass('');
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
          <span>Class:</span>
          <select
            name="charClass"
            onChange={(e) => setCharClass(e.target.value)}
            value={charClass}
          >
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
          </select>
        </label>
        <input className="btn" type="submit" value="create character" />
      </form>
    </div>
  );
}

export default Forms;
