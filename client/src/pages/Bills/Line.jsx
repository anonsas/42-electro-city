import React, { useContext } from 'react';
import BillContext from '../../contexts/BillContext';

function Line({ bill }) {
  const { setDeleteBillModal } = useContext(BillContext);

  return (
    <div className="line">
      <div className="line__content">
        <p>{bill.supName}</p>
        <p>{bill.invoice}</p>
        <p>{bill.kwh} kWh</p>
        <p>{bill.total} &euro;</p>
        <p>
          {bill.name} {bill.surname}
        </p>
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
