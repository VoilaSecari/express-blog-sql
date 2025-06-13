const mySql = require("mysql2");

// creare ora la connessione che verrà esportata

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog",
  port: 3306,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connesso correttamente");
});

module.exports = connection;
