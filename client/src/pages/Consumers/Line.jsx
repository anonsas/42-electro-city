import React, { useContext } from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';

function Line({ consumer }) {
  const { setModalData, setModalDeleteData, supplierList } = useContext(ConsumerContext);
  return (
    <div className="line">
      <div className="line__content">
        <p>{consumer.name}</p>
        <p>{consumer.surname}</p>
        <p>{consumer.electricity_number}</p>
        <p>
          {supplierList.find((supplier) => supplier.id === consumer.supplier_id)?.name}
        </p>
      </div>

      <div className="line__actions">
        <button type="button" onClick={() => setModalData(consumer)}>
          Edit
        </button>
        <button type="button" onClick={() => setModalDeleteData(consumer)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
