import React, { useState } from 'react';
import '../../App.css';

function ConditionalRender() {
  const [x, setX] = useState();
  return (
    <div className="card">
      <h3>Conditional Rendering</h3>
      <span>I&apos;m a...</span>
      {!x && <p>Jedi Master</p>}
      {x && <p>Sith Lord</p>}
      <button className="btn" type="button" onClick={() => setX(!x)}>Choose your side </button>
    </div>
  );
}

export default ConditionalRender;
