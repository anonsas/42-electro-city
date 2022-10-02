import React, { useContext } from 'react';
import SupplierContext from '../../contexts/SupplierContext';

function Line({ supplier }) {
  const { setModalData, setModalDeleteData } = useContext(SupplierContext);

  return (
    <div className="line">
      <div className="line__content">
        <p>{supplier.name}</p>
        <p>{supplier.kw_price} eur/kWh</p>
      </div>

      <div className="line__actions">
        <button type="button" onClick={() => setModalData(supplier)}>
          Edit
        </button>
        <button type="button" onClick={() => setModalDeleteData(supplier)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
