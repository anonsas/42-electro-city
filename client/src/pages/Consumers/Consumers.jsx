import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ConsumerContext from '../../contexts/ConsumerContext';
import Create from './Create';
import List from './List';

function Consumers() {
  const [consumers, setConsumers] = useState(null);
  const [createConsumer, setCreateConsumer] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/consumers')
      .then((response) => setConsumers(response.data))
      .catch((error) => alert(error.message));
  }, []);

  useEffect(() => {
    if (createConsumer === null) return;
    axios
      .post('http://localhost:4000/consumers', createConsumer)
      .then((response) => {
        setCreateConsumer(null);
      })
      .catch((error) => alert(error.message));
  }, [createConsumer]);

  return (
    <ConsumerContext.Provider value={{ consumers, setCreateConsumer }}>
      <Create />
      <List />
    </ConsumerContext.Provider>
  );
}

export default Consumers;
