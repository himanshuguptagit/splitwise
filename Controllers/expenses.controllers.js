const expenseService = require('../Services/expenses.services');


function create(req, res, next) {
    expenseService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    expenseService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    expenseService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByUserId(req, res, next) {
    expenseService.getByUserId(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

// function update(req, res, next) {
//     expenseService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     expenseService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }


module.exports = {
    create,
    getAll,
    getById,
    getByUserId

}