import React, { useState, useEffect } from 'react';
import './Bills.scss';
import BillContext from '../../contexts/BillContext';
import Create from './Create';
import Delete from './Delete';
import List from './List';
import axios from 'axios';

function Bills() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [billList, setBillList] = useState(null);
  const [createBill, setCreateBill] = useState(null);
  const [deleteBill, setDeleteBill] = useState(null);
  const [deleteBillModal, setDeleteBillModal] = useState(null);

  const [supplierList, setSupplierList] = useState(null);
  const [consumerList, setConsumerList] = useState(null);

  // GET ALL SUPPLIERS FOR SELECT
  useEffect(() => {
    axios
      .get('http://localhost:4000/suppliers')
      .then((response) => {
        setSupplierList(response.data);
      })
      .catch((error) => alert(error.message));
  }, []);

  // GET ALL CONSUMERS FROM SUPPLIER FOR SELECT
  useEffect(() => {
    axios
      .get('http://localhost:4000/consumers')
      .then((response) => {
        setConsumerList(response.data?.map((consumer) => ({ ...consumer, show: false })));
      })
      .catch((error) => alert(error.message));
  }, []);

  // CRUD FUNCTIONALITY - BILLS =====================
  useEffect(() => {
    axios
      .get('http://localhost:4000/bills')
      .then((response) => {
        setBillList(response.data);
      })
      .catch((error) => alert(error.message));
  }, [lastUpdate]);

  useEffect(() => {
    if (createBill === null) return;
    axios
      .post('http://localhost:4000/bills', createBill)
      .then((response) => {
        setCreateBill(null);
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [createBill]);

  useEffect(() => {
    if (deleteBill === null) return;
    axios
      .delete(`http://localhost:4000/bills/${deleteBill.id}`)
      .then((response) => {
        setDeleteBill(null);
        setLastUpdate(Date.now());
      })
      .catch((error) => alert(error.message));
  }, [deleteBill]);

  return (
    <BillContext.Provider
      value={{
        billList,
        setCreateBill,
        setDeleteBill,
        deleteBillModal,
        setDeleteBillModal,
        supplierList,
        consumerList,
        setConsumerList,
      }}
    >
      <Create />
      <List />
      <Delete />
    </BillContext.Provider>
  );
}

export default Bills;
