import React, { useState } from 'react';

function ListRender() {
  const arr = [
    { id: 1, name: 'Pedro', age: 29 },
    { id: 2, name: 'Cynthia', age: 34 },
    { id: 3, name: 'Lucas', age: 9 },
  ];
  const [list, setList] = useState(arr);

  const deleteRandomUser = () => {
    const randomNumber = Math.ceil(Math.random() * 3);
    console.log('random number', randomNumber);
    setList((previous) => {
      console.log('previous lenght', previous.length);
      if (previous.length > 1) return previous.filter((e) => e.id !== randomNumber);
      return previous.filter((e) => e === 0);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {list.length > 0 ? (
        <button type="button" onClick={deleteRandomUser}>Delete random user</button>
      ) : (
        <button type="button" onClick={() => setList(arr)}>Reset list</button>
      )}
    </div>

  );
}

export default ListRender;
