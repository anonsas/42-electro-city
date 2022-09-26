import React from 'react';

function Line({ consumer }) {
  return (
    <div key={consumer.id} style={{ display: 'flex', columnGap: '1rem' }}>
      <p>{consumer.name}</p>
      <p>{consumer.kw_price}</p>
    </div>
  );
}

export default Line;
