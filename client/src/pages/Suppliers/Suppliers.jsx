import React, { useState, useEffect } from 'react';
import './Suppliers.scss';
import axios from 'axios';

import SupplierContext from '../../contexts/SupplierContext';
import Create from './Create';
import List from './List';
import Edit from './Edit';
import Delete from './Delete';

function Suppliers() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [suppliers, setSuppliers] = useState(null);
  const [createSupplier, setCreateSupplier] = useState(null);
  const [deleteSupplier, setDeleteSupplier] = useState(null);
  const [editSupplier, setEditSupplier] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalDeleteData, setModalDeleteData] = useState(null);

  // CRUD FUNCTIONALITY ==================================
  useEffect(() => {
    axios
      .get('http://localhost:4000/suppliers')
      .then((response) => setSuppliers(response.data))
      .catch((error) => alert(error.message));
  }, [lastUpdate]);

  useEffect(() => {
    if (createSupplier === null) return;
    axios
      .post('http://localhost:4000/suppliers', createSupplier)
      .then((response) => {
        setLastUpdate(Date.now());
        setCreateSupplier(null);
      })
      .catch((error) => alert(error.message));
  }, [createSupplier]);

  useEffect(() => {
    if (deleteSupplier === null) return;
    axios
      .delete(`http://localhost:4000/suppliers/${deleteSupplier.id}`)
      .then((response) => {
        setLastUpdate(Date.now());
        setDeleteSupplier(null);
      })
      .catch((error) => alert(error.message));
  }, [deleteSupplier]);

  useEffect(() => {
    if (editSupplier === null) return;
    axios
      .put(`http://localhost:4000/suppliers/${editSupplier.id}`, editSupplier)
      .then((response) => {
        setLastUpdate(Date.now());
        setEditSupplier(null);
      })
      .catch((error) => alert(error.message));
  }, [editSupplier]);

  return (
    <SupplierContext.Provider
      value={{
        suppliers,
        setCreateSupplier,
        setDeleteSupplier,
        setEditSupplier,
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
    </SupplierContext.Provider>
  );
}

export default Suppliers;
