
const db = require('../lib/database');


module.exports = {
    getAll,
    getById,
    getByUserId,
    create,
    // update,
    delete: _delete
};


async function getAll() {
    var sql = `SELECT * FROM expenses`;
    let expenses = await db.query(sql);

    let promises = expenses.map(async (expense) => {
        sql = `SELECT * FROM userExpenses WHERE expenseId=${expense.id}`;
        let userExpenses = await db.query(sql);
        let obj = {...expense, userExpenses};
        console.log(obj)
        return obj;
    })
    const dto = await Promise.all(promises)
    return dto;
}

async function getById(id) {
    var sql = `SELECT * FROM expenses WHERE id=${id}`;
    let expense = await db.query(sql);
    return expense;
}

async function getByUserId(id) {
    var sql = `SELECT * FROM userExpenses WHERE userId=${id}`;
    let expenses = await db.query(sql);
    return expenses;
}

async function create(expense) {

    try{
        //Create entry in Expenses table
        let sql = `INSERT INTO expenses (description, total) VALUES ('${expense.description}', ${expense.total})`;
        let result = await db.query(sql);
        let expenseId = result.insertId;

        //add individual expenses
        if(expense.userExpenses && expense.userExpenses.length > 0){
            sql = `INSERT INTO userExpenses (userId, expenseId, amount, expectedAmount, amountToReceive ) VALUES `;

            expense.userExpenses.forEach(element => {
                sql += ` (${element.userId}, ${expenseId}, ${element.amount}, ${element.expectedAmount}, ${element.amount - element.expectedAmount}),`;
            });
            //remove last comma
            sql = sql.substring(0, sql.length - 1);
            await db.query(sql);
        }
        return true;
    }catch(e){
        console.log(e)
        return e.message;
    }

}


async function _delete(id) {
    let sql = `DELETE FROM users WHERE id = ${id}`;
    
    let result = await db.query(sql);

    return result;
}