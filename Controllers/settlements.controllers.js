const settlementService = require('../Services/settlements.services');


function getRecommendedSettlements(req, res, next){
    settlementService.getRecommendedSettlements()
        .then((results) =>  res.json(results) )
        .catch(err => next(err));
}

function pay(req, res, next) {
    settlementService.pay(req.body)
        .then((results) =>  res.json(results) )
        .catch(err => next(err));
}

// function getAll(req, res, next) {
//     expenseService.getAll()
//         .then(users => res.json(users))
//         .catch(err => next(err));
// }

// function getById(req, res, next) {
//     expenseService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

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
    getRecommendedSettlements,
    pay
    // create,
    // getAll,
    // getById,
    // _delete

}