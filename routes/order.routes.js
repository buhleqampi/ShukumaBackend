const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order_controller');

router.post('/', orderController.createOrder);
// router.get('/', orderController.getOrders);
// router.get('/:id', orderController.getOrderById);
// router.put('/:id', orderController.updateOrder);
// router.delete('/:id', orderController.deleteOrder);
router.delete('/orders/:id', orderController.deleteOrder);
router.delete('/orders/', orderController.deleteAllOrders);

module.exports = router;