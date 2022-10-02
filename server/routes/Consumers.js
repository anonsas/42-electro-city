const express = require('express');
const router = express.Router();

const {
  getAllConsumers,
  createNewConsumer,
  deleteConsumerByID,
  updateConsumerByID,
} = require('../controllers/Consumers');

router.get('/', getAllConsumers);
router.post('/', createNewConsumer);
router.delete('/:id', deleteConsumerByID);
router.put('/:id', updateConsumerByID);

module.exports = router;
