var express = require('express');
const settlementsController = require('../Controllers/settlements.controllers');

var router = express.Router();

router.get('/recommendations', settlementsController.getRecommendedSettlements);
router.post('/', settlementsController.pay);

// router.post('/', usersController.register);
// router.get('/', usersController.getAll);
// router.get('/:id', usersController.getById);
// router.delete('/:id', usersController._delete);

module.exports = router;