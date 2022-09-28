import React, { useContext } from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';

function Delete() {
  const { modalDeleteData, setModalDeleteData, setDeleteConsumer } =
    useContext(ConsumerContext);

  const deleteConsumerHandler = () => {
    setDeleteConsumer(modalDeleteData);
    setModalDeleteData(null);
  };

  if (modalDeleteData === null) return;

  return (
    <div className="overlay">
      <div className="modal">
        <h5>Are you sure?</h5>
        <div className="modal__actions">
          <button type="button" onClick={deleteConsumerHandler}>
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
