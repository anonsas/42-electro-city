import React, { useContext, useState } from 'react';
import ConsumerContext from '../../contexts/ConsumerContext';

function Create() {
  const { setCreateConsumer, supplierList } = useContext(ConsumerContext);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [electricityNum, setElectricityNum] = useState('');
  const [supplier, setSupplier] = useState(0);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!name || !surname || !electricityNum || !supplier)
      return alert('Please fill in the blanks');

    const createData = {
      name,
      surname,
      electricityNum,
      supplier: parseInt(supplier),
    };
    setCreateConsumer(createData);

    setName('');
    setSurname('');
    setElectricityNum('');
    setSupplier(0);
  };

  return (
    <form>
      <h2>New Payment</h2>
      <div>
        {/* NAME */}
        <div>
          <label htmlFor="name">Name:</label>
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

        {/* SURNAME */}
        <div>
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
        <div>
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
        <div>
          <label htmlFor="supplier">Choose Supplier:</label>

          <select
            name="supplier"
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          >
            <option value={0} disabled>
              Choose from list
            </option>
            {supplierList?.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" onClick={formSubmitHandler}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Create;
