import React, { useContext, useState } from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';

function Create() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [electricityNum, setElectricityNum] = useState('');
  const [supplier, setSupplier] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!name || !surname || !electricityNum || !supplier)
      return alert('Please fill in the blanks');
  };

  return (
    <form>
      <h5>New Payment</h5>
      <div>
        {/* NAME */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className=""
            value={name}
            autoComplete={false}
            required
          />
        </div>

        {/* SURNAME */}
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            className=""
            value={surname}
            autoComplete={false}
            required
          />
        </div>

        {/* ELECTRICITY-NUMBER */}
        <div>
          <label htmlFor="enumber">Electricity Number:</label>
          <input
            type="text"
            id="enumber"
            className=""
            value={electricityNum}
            autoComplete={false}
            required
          />
        </div>

        {/* SUPPLIER */}
        <div>
          <label htmlFor="supplier">Supplier:</label>
          <input
            type="text"
            id="supplier"
            className=""
            value={supplier}
            autoComplete={false}
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
