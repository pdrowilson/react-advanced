import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h3>List Render</h3>
      <button className="btn" type="button" onClick={() => setCount(count + 1)}>
        Counter:
        {count}
      </button>
    </div>
  );
}

export default Counter;
