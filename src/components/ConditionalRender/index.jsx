import React, { useState } from 'react';

function ConditionalRender() {
  const [x, setX] = useState();
  return (
    <div>
      <span>I&apos;m a...</span>
      {!x && <p>Jedi Master</p>}
      {x && <p>Sith Lord</p>}
      <button type="button" onClick={() => setX(!x)}>Choose your side </button>
    </div>
  );
}

export default ConditionalRender;
