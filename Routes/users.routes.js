var express = require('express');
const usersController = require('../Controllers/users.controllers');

var router = express.Router();

router.post('/', usersController.register);
router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
// router.delete('/:id', usersController._delete);

module.exports = router;