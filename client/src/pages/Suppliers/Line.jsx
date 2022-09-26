import React from 'react';

function Line({ supplier }) {
  return (
    <div key={supplier.id} style={{ display: 'flex', columnGap: '1rem' }}>
      <p>{supplier.name}</p>
      <p>{supplier.kw_price} eur/kWh</p>
    </div>
  );
}

export default Line;
