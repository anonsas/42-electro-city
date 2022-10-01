import React, { useContext } from 'react';
import BillContext from '../../contexts/BillContext';

function Line({ bill }) {
  const { setDeleteBillModal } = useContext(BillContext);

  return (
    <div key={bill.id} className="line">
      <div className="line__content">
        <p>{bill.invoice}</p>
        <p>{bill.kwh} eur/kWh</p>
        <p>{bill.total}</p>
        <p>{bill.consumer_id}</p>
      </div>

      <div className="line__actions">
        <button type="button" onClick={() => setDeleteBillModal(bill)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
