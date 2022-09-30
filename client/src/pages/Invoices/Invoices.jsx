import React, { useState, useEffect } from 'react';
import './Invoices.scss';
import InvoiceContext from '../../contexts/InvoiceContext';
import Create from './Create';
import axios from 'axios';

function Invoices() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [invoiceList, setInvoiceList] = useState(null);
  const [createInvoice, setCreateInvoice] = useState(null);
  const [deleteInvoice, setDeleteInvoice] = useState(null);
  const [deleteInvoiceModal, setDeleteInvoiceModal] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/invoices')
      .then((response) => {
        setInvoiceList(response.data);
      })
      .catch((error) => alert(error.message));
  }, [lastUpdate]);

  useEffect(() => {
    if (createInvoice === null) return;
    axios
      .post('http://localhost:4000/invoices', createInvoice)
      .then((response) => {
        setCreateInvoice(null);
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [createInvoice]);

  useEffect(() => {
    if (deleteInvoice === null) return;
    axios
      .delete(`http://localhost:4000/invoices/${deleteInvoice.id}`)
      .then((response) => {
        setDeleteInvoice(null);
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [deleteInvoice]);

  console.log(invoiceList);
  return (
    <InvoiceContext.Provider
      value={{
        invoiceList,
        setCreateInvoice,
        setDeleteInvoice,
        deleteInvoiceModal,
        setDeleteInvoiceModal,
      }}
    >
      <Create />
    </InvoiceContext.Provider>
  );
}

export default Invoices;
