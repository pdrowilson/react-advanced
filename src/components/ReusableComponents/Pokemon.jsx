/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function Pokemon({ name, type }) {
  return (
    <div>
      <p>{name} | <strong>{type}</strong></p>
    </div>
  );
}

export default Pokemon;
