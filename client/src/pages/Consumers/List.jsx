import React, { useContext } from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';
import Line from './Line';

function List() {
  const { consumers } = useContext(ConsumerContext);

  return (
    <div>
      <h3>List of consumers:</h3>
      {consumers?.map((consumer) => (
        <Line key={consumer.id} consumer={consumer} />
      ))}
    </div>
  );
}

export default List;
