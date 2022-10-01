import React, { useContext, useState } from 'react';
import BillContext from '../../contexts/BillContext';

function Create() {
  const { setCreateSupplier } = useContext(BillContext);

  const [invoice, setInvoice] = useState('');
  const [kwh, setKwh] = useState('');
  const [total, setTotal] = useState('');
  const [consumerID, setConsumerID] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!invoice || !kwh || !total || !consumerID)
      return alert('Please fill in the blanks');

    const createData = { invoice, kwh, total, consumerID };
    setCreateSupplier(createData);

    setInvoice('');
    setKwh('');
    setTotal('');
    setConsumerID('');
  };

  return (
    <form>
      <h2>Fill the bill:</h2>
      <div>
        {/* INVOICE */}
        <div>
          <label htmlFor="invoice">Supplier Title:</label>
          <input
            type="text"
            id="invoice"
            className=""
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        {/* KWH */}
        <div>
          <label htmlFor="kwh">Price per kWh:</label>
          <input
            type="text"
            id="kwh"
            className=""
            value={kwh}
            onChange={(e) => setKwh(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        {/* TOTAL */}
        <div>
          <label htmlFor="total">Total Price:</label>
          <input
            type="text"
            id="total"
            className=""
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        {/* TOTAL */}
        <div>
          <label htmlFor="consumerID">Total Price:</label>
          <input
            type="text"
            id="consumerID"
            className=""
            value={consumerID}
            onChange={(e) => setConsumerID(e.target.value)}
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
