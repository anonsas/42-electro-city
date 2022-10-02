const express = require('express');
const router = express.Router();

const {
  getAllSuppliers,
  createNewSupplier,
  deleteSupplierByID,
  updateSupplierByID,
} = require('../controllers/Suppliers');

router.get('/', getAllSuppliers);
router.post('/', createNewSupplier);
router.delete('/:id', deleteSupplierByID);
router.put('/:id', updateSupplierByID);

module.exports = router;
