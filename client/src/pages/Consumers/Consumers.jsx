import React from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';
import Create from './Create';

function Consumers() {
  return (
    <ConsumerContext.Provider value={{}}>
      <Create />
    </ConsumerContext.Provider>
  );
}

export default Consumers;
