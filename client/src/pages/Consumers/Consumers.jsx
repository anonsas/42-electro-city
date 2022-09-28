import React, { useState, useEffect } from 'react';
import './Consumers.scss';
import axios from 'axios';

import ConsumerContext from '../../contexts/ConsumerContext';
import Create from './Create';
import List from './List';
import Edit from './Edit';
import Delete from './Delete';

function Consumers() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [consumers, setConsumers] = useState(null);
  const [createConsumer, setCreateConsumer] = useState(null);
  const [deleteConsumer, setDeleteConsumer] = useState(null);
  const [editConsumer, setEditConsumer] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalDeleteData, setModalDeleteData] = useState(null);

  const [supplierList, setSupplierList] = useState(null);

  // Reading suppliers for SELECT =======================
  useEffect(() => {
    axios
      .get('http://localhost:4000/suppliers')
      .then((response) => setSupplierList(response.data))
      .catch((error) => alert(error.message));
  }, []);

  // CRUD FUNCTIONALITY ==================================
  useEffect(() => {
    axios
      .get('http://localhost:4000/consumers')
      .then((response) => setConsumers(response.data))
      .catch((error) => alert(error.message));
  }, [lastUpdate]);

  useEffect(() => {
    if (createConsumer === null) return;
    axios
      .post('http://localhost:4000/consumers', createConsumer)
      .then((response) => {
        setLastUpdate(Date.now());
        setCreateConsumer(null);
      })
      .catch((error) => alert(error.message));
  }, [createConsumer]);

  useEffect(() => {
    if (deleteConsumer === null) return;
    axios
      .delete(`http://localhost:4000/consumers/${deleteConsumer.id}`)
      .then((response) => {
        setLastUpdate(Date.now());
        setDeleteConsumer(null);
      })
      .catch((error) => alert(error.message));
  }, [deleteConsumer]);

  useEffect(() => {
    if (editConsumer === null) return;
    axios
      .put(`http://localhost:4000/consumers/${editConsumer.id}`, editConsumer)
      .then((response) => {
        setLastUpdate(Date.now());
        setEditConsumer(null);
      })
      .catch((error) => alert(error.message));
  }, [editConsumer]);

  return (
    <ConsumerContext.Provider
      value={{
        supplierList,
        consumers,
        setCreateConsumer,
        setDeleteConsumer,
        setEditConsumer,
        modalData,
        setModalData,
        modalDeleteData,
        setModalDeleteData,
      }}
    >
      <Create />
      <List />
      <Edit />
      <Delete />
    </ConsumerContext.Provider>
  );
}

export default Consumers;
