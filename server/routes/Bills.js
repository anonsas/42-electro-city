const express = require('express');
const router = express.Router();

const { getAllBills, createNewBill, deleteBillByID } = require('../controllers/Bills');

router.get('/', getAllBills);
router.post('/', createNewBill);
router.delete('/:id', deleteBillByID);

module.exports = router;
