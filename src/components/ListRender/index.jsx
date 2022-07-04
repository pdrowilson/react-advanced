import React, { useState } from 'react';

function ListRender() {
  const arr = ['pedro', 'lucas', 'cynthia'];
  // eslint-disable-next-line no-unused-vars
  const [list, _setList] = useState(arr);
  return (
    <div>
      <ul>
        {list.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListRender;
