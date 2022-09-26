import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SupplierContext from '../../contexts/SupplierContext';
import Create from './Create';
import List from './List';

function Suppliers() {
  const [suppliers, setSuppliers] = useState(null);
  const [createSupplier, setCreateSupplier] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/suppliers')
      .then((response) => setSuppliers(response.data))
      .catch((error) => alert(error.message));
  }, []);

  useEffect(() => {
    if (createSupplier === null) return;
    axios
      .post('http://localhost:4000/suppliers', createSupplier)
      .then((response) => {
        setCreateSupplier(null);
      })
      .catch((error) => alert(error.message));
  }, [createSupplier]);

  return (
    <SupplierContext.Provider value={{ suppliers, setCreateSupplier }}>
      <Create />
      <List />
    </SupplierContext.Provider>
  );
}

export default Suppliers;
