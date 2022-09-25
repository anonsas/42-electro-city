import React from 'react';
import SupplierContext from '../../contexts/SupplierContext';

function Suppliers() {
  return (
    <SupplierContext.Provider>
      <div>Suppliers</div>
    </SupplierContext.Provider>
  );
}

export default Suppliers;
