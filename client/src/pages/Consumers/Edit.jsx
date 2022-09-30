import React, { useState, useEffect, useContext } from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';

function Edit() {
  const { setEditConsumer, modalData, setModalData, supplierList } =
    useContext(ConsumerContext);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [electricityNum, setElectricityNum] = useState('');
  const [supplier, setSupplier] = useState(0);

  useEffect(() => {
    if (modalData === null) return;
    setName(modalData.name);
    setSurname(modalData.surname);
    setElectricityNum(modalData.electricity_number);
    setSupplier(modalData.supplier_id);
  }, [modalData]);

  const modalSubmitHandler = (e) => {
    e.preventDefault();
    if (!name || !surname || !electricityNum || !supplier)
      return alert('Please fill in the blanks');

    setEditConsumer({
      name,
      surname,
      electricityNum,
      supplier: parseInt(supplier),
      id: modalData.id,
    });
    setModalData(null);
  };

  if (!modalData) return;

  return (
    <div className="overlay">
      <form className="modal">
        <h2>Edit Consumer:</h2>

        {/* NAME */}
        <div className="modal__question">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* SURNAME */}
        <div className="modal__question">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            className=""
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        {/* ELECTRICITY-NUMBER */}
        <div className="modal__question">
          <label htmlFor="enumber">Electricity Number:</label>
          <input
            type="text"
            id="enumber"
            className=""
            value={electricityNum}
            onChange={(e) => setElectricityNum(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        {/* SUPPLIER */}
        <div className="modal__question">
          <label htmlFor="supplier">Choose Supplier:</label>

          <select
            name="supplier"
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          >
            {supplierList?.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
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
