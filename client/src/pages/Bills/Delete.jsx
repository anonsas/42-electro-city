import React, { useContext } from 'react';
import BillContext from '../../contexts/BillContext';

function Delete() {
  const { deleteBillModal, setDeleteBillModal, setDeleteBill } = useContext(BillContext);

  const deleteSupplierHandler = () => {
    setDeleteBill(deleteBillModal);
    setDeleteBillModal(null);
  };

  if (deleteBillModal === null) return;

  return (
    <div className="overlay">
      <div className="modal">
        <h5>Are you sure?</h5>
        <div className="modal__actions">
          <button type="button" onClick={deleteSupplierHandler}>
            I'm sure
          </button>
          <button type="button" onClick={() => setDeleteBillModal(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
