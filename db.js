const mysql = require("mysql2");

console.log("MYSQLHOST:", process.env.MYSQLHOST);

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
}).promise();

console.log("Pool MySQL iniciado");

module.exports = db;