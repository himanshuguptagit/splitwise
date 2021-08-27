var express = require('express');
const exepensesController = require('../Controllers/expenses.controllers');

var router = express.Router();

router.post('/', exepensesController.create);
router.get('/', exepensesController.getAll);
router.get('/:id', exepensesController.getById);
router.get('/user/:id', exepensesController.getByUserId);

// router.delete('/:id', exepensesController._delete);

module.exports = router;