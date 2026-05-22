const mysql = require("mysql2");

const connection = mysql.createConnection(
  process.env.DATABASE_URL
);

connection.connect((err) => {

  if (err) {
    console.log("ERROR MYSQL:");
    console.log(err);
  } else {
    console.log("MySQL conectado");
  }

});

module.exports = connection;