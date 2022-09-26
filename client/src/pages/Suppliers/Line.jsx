import React, { useContext } from 'react';
import SupplierContext from '../../contexts/SupplierContext';

function Line({ supplier }) {
  const { setDeleteSupplier } = useContext(SupplierContext);

  const editSupplierHandler = (editSupplier) => {
    console.log(editSupplier);
  };

  return (
    <div key={supplier.id} className="line">
      <div className="line__content">
        <p>{supplier.name}</p>
        <p>{supplier.kw_price} eur/kWh</p>
      </div>

      <div className="line__actions">
        <button type="button" onClick={() => editSupplierHandler(supplier)}>
          Edit
        </button>
        <button type="button" onClick={() => setDeleteSupplier(supplier)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
