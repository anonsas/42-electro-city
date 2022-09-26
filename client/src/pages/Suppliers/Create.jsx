import React, { useContext, useState } from 'react';
import SupplierContext from '../../contexts/SupplierContext';

function Create() {
  const { setCreateSupplier } = useContext(SupplierContext);

  const [name, setName] = useState('');
  const [priceKW, setPriceKW] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!name || !priceKW) return alert('Please fill in the blanks');

    const createData = {
      name,
      priceKW,
    };

    setCreateSupplier(createData);
  };

  return (
    <form>
      <h2>Select Supplier:</h2>
      <div>
        {/* NAME */}
        <div>
          <label htmlFor="name">Supplier Title:</label>
          <input
            type="text"
            id="name"
            className=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        {/* ELECTRICITY PRICE */}
        <div>
          <label htmlFor="electricityPrice">Price per kWh:</label>
          <input
            type="text"
            id="electricityPrice"
            className=""
            value={priceKW}
            onChange={(e) => setPriceKW(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        <button type="submit" onClick={formSubmitHandler}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Create;
