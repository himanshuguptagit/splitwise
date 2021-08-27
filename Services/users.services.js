
const db = require('../lib/database');


module.exports = {
    getAll,
    getById,
    create,
    // update,
    delete: _delete
};


async function getAll() {
    var sql = `SELECT * FROM users`;
    let users = await db.query(sql);
    return users;

}

async function getById(id) {
    var sql = `SELECT * FROM users WHERE id=${id}`;
    let user = await db.query(sql);
    return user;
}

async function create(user) {

    try{
        let sql = `INSERT INTO users (name) VALUES ('${user.name}')`;
    
        let result = await db.query(sql);
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