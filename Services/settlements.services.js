
const db = require('../lib/database');
const calculateMinCashFlow = require('../lib/minCashFlow');
const expenseService = require('./expenses.services');


module.exports = {
    getRecommendedSettlements,
    pay
};

async function getRecommendedSettlements(){

    try{

        let sql = `SELECT userId as id, sum(amountToReceive) as amount FROM userExpenses GROUP BY userId;`;
        let amounts = await db.query(sql);
        let transactions = calculateMinCashFlow(amounts);
        return transactions;

    }catch(e){
        return e;
    }


}


async function pay(transaction){

    let expenseObj = {
        "description": `User ${transaction.payerId} paid Rs${transaction.amount} to ${transaction.receiverId}`,
        "total": transaction.amount,
        "userExpenses": [
            {
                "userId": transaction.receiverId,
                "amount": 0,
                "expectedAmount": transaction.amount
            },
            {
                "userId": transaction.payerId,
                "amount": transaction.amount,
                "expectedAmount": 0
            },
        ]
    }

    try{
        await expenseService.create(
            expenseObj
        )
        return true;
    }catch(e){
        return e.message
    }
 


}