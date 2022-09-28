import React, { useContext } from 'react';
import SupplierContext from '../../contexts/SupplierContext';

function Delete() {
  const { modalDeleteData, setModalDeleteData, setDeleteSupplier } =
    useContext(SupplierContext);

  const deleteSupplierHandler = () => {
    setDeleteSupplier(modalDeleteData);
    setModalDeleteData(null);
  };

  if (modalDeleteData === null) return;

  return (
    <div className="overlay">
      <div className="modal">
        <h5>Are you sure?</h5>
        <div className="modal__actions">
          <button type="button" onClick={deleteSupplierHandler}>
            I'm sure
          </button>
          <button type="button" onClick={() => setModalDeleteData(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
