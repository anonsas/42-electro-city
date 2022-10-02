import React, { useContext, useState, useEffect, useCallback } from 'react';
import BillContext from '../../contexts/BillContext';

function Create() {
  const { setCreateBill, supplierList, consumerList, setConsumerList } =
    useContext(BillContext);

  const [supplier, setSupplier] = useState('0');
  const [consumer, setConsumer] = useState('0');

  const [invoice, setInvoice] = useState('');
  const [kwh, setKwh] = useState('');
  const [total, setTotal] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!invoice || !kwh || !total || consumer === '0')
      return alert('Please fill in the blanks');

    const createData = {
      invoice,
      kwh: parseInt(kwh),
      total: parseFloat(total),
      consumer_id: parseInt(consumer),
    };
    setCreateBill(createData);

    setSupplier('0');
    setConsumer('0');
    setInvoice('');
    setKwh('');
    setTotal('');
  };

  const supplierChangeHandler = (e) => {
    setSupplier(e.target.value);
    setConsumer('0');
    setInvoice('');
  };

  const generateInvoiceHandler = useCallback(() => {
    if (parseInt(supplier) === 0) {
      setInvoice('');
    } else {
      const invoiceType = supplierList?.find((s) => s.id === parseInt(supplier)).name;
      let randomNumber = (
        invoiceType.slice(0, 2).toUpperCase() + Math.floor(Math.random() * 9999999)
      ).padStart(7, '0');
      setInvoice(randomNumber);
    }
  }, [supplier, supplierList]);

  const totalPriceHandler = useCallback(() => {
    if (parseInt(supplier) === 0 || kwh === '') {
      setTotal('');
    } else {
      const invoiceType = supplierList?.find((s) => s.id === parseInt(supplier)).kw_price;
      let totalPrice = parseFloat(invoiceType) * parseInt(kwh);
      setTotal(totalPrice.toFixed(2));
    }
  }, [supplierList, supplier, kwh]);

  useEffect(() => {
    setConsumer('0');
    generateInvoiceHandler();
    setConsumerList((prevState) =>
      prevState?.map((consumer) =>
        consumer.supplier_id === parseInt(supplier)
          ? { ...consumer, show: true }
          : { ...consumer, show: false }
      )
    );
  }, [supplier, setConsumerList, generateInvoiceHandler]);

  useEffect(() => {
    totalPriceHandler();
  }, [supplier, kwh, totalPriceHandler]);

  return (
    <form>
      <h2>New bill:</h2>
      <div>
        {/* SELECT SUPPLIER */}
        <div>
          <label htmlFor="supplier">Choose Supplier:</label>
          <select
            name="supplier"
            id="supplier"
            value={supplier}
            onChange={supplierChangeHandler}
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

        {/* SELECT CONSUMER FROM SUPPLIER */}
        <div>
          <label htmlFor="consumer">Consumer:</label>
          <select
            name="consumer"
            id="consumer"
            value={consumer}
            onChange={(e) => setConsumer(e.target.value)}
          >
            <option value={0} disabled>
              Choose from list
            </option>
            {consumerList?.map(
              (consumer) =>
                consumer.show && (
                  <option key={consumer.id} value={consumer.id}>
                    {consumer.name} {consumer.surname}
                  </option>
                )
            )}
          </select>
        </div>

        {/* INVOICE */}
        <div>
          <label htmlFor="invoice">Invoice:</label>
          <input
            type="text"
            id="invoice"
            className=""
            value={consumer !== '0' ? invoice : ''}
            readOnly
          />
        </div>

        {/* KWH */}
        <div>
          <label htmlFor="kwh">kW/h:</label>
          <input
            type="text"
            id="kwh"
            className=""
            value={kwh}
            onChange={(e) => setKwh(e.target.value.replace(/[^\d]/, ''))}
            autoComplete="off"
            required
          />
        </div>

        {/* TOTAL */}
        <div>
          <label htmlFor="total">Total Price:</label>
          <input type="text" id="total" className="" value={total} readOnly />
        </div>

        <button type="submit" onClick={formSubmitHandler}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Create;
