import React, { useState } from 'react';

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h3>{title}</h3>
      <button className="btn" type="button" onClick={() => setCount(count + 1)}>
        Counter:
        {count}
      </button>
      <button className="btn" type="button" onClick={() => setCount(count + 1)}>
        add 1
      </button>
      <button className="btn" type="button" onClick={() => count > 0 && setCount(count - 1)}>
        subtract 1
      </button>
      <button className="btn" type="button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
