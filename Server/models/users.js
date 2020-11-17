
const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;

async function getAll(){
    return await mysql.query(`SELECT * FROM Users`);
}

async function get(id){
    const sql = `SELECT
    *, 
    (SELECT Value FROM ContactMethods Where User_id = Users.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = true) as PrimaryEmail
    FROM Users WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
}

async function login(email , password){
    const sql = `SELECT *
    FROM Users U Join ContactMethods CM ON U.id=CM.User_id WHERE CM.Value=?`;
    const rows = await mysql.query(sql, [email]);
    if(!rows.length) throw { status: 404, message: "Sorry, the email adress is not registered with us." };
    if(! await bcrypt.compare(password, rows[0].Password)) throw { status: 403, message: "Sorry, wrong password" };
    return get(rows[0].User_id);
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 2`);
}

async function add(FirstName, LastName, DOB, Password, User_Type){
    const sql = 'INSERT INTO `Users` (`created_at`, `FirstName`, `LastName`, `DOB`, `Password`, `User_Type`) VALUES ? ;';
    const params = [[new Date(), FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [params]);
}

async function update(id, FirstName, LastName, DOB, Password, User_Type){
    const sql = 'UPDATE `Users` SET ? WHERE `id` = ?;';
    const params = {FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = 'DELETE FROM `Users` WHERE `Users`.`id` = ?';
    return await mysql.query(sql, [id]);
}

async function register(FirstName, LastName, DOB, Password, User_Type, email){
    if(await cm.exists(email)){
        throw {status: 409, message: "You already have an account associated with this email."}
    }
    const hash = await bcrypt.hash(Password,SALT_ROUNDS )
    const res = await add(FirstName, LastName, DOB, hash, User_Type);
    const emailRes = await cm.add(cm.Types.EMAIL, email, true, true,res.insertId);
    const user = await get(res.insertId);
    return user;
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, register, login, search}