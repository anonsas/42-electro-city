import React, { useState, useEffect, useContext } from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';

function Edit() {
  const { setEditConsumer, modalData, setModalData } = useContext(ConsumerContext);

  const [name, setName] = useState('');
  const [priceKW, setPriceKW] = useState('');

  useEffect(() => {
    if (modalData === null) return;
    setName(modalData.name);
    setPriceKW(modalData.kw_price);
  }, [modalData]);

  const modalSubmitHandler = (e) => {
    e.preventDefault();
    if (!name || !priceKW) return alert('Please fill in the blanks');

    setEditConsumer({ name, priceKW: parseFloat(priceKW), id: modalData.id });
    setModalData(null);
  };

  if (!modalData) return;

  return (
    <div className="overlay">
      <form className="modal">
        <h2>Edit Supplier</h2>
        <div className="modal__question">
          <label htmlFor="name">Supplier Title:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="modal__question">
          <label htmlFor="priceKW">Price per kWh</label>
          <input
            type="text"
            id="priceKW"
            name="priceKW"
            value={priceKW}
            onChange={(e) => setPriceKW(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="modal__actions">
          <button type="submit" onClick={modalSubmitHandler}>
            Submit
          </button>
          <button type="button" onClick={() => setModalData(null)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
