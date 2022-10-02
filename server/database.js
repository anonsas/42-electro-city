const mysql = require('mysql');

// DATABASE CONNECTION================
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'electricity_suppliers',
});

con.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});

exports.databaseConnection = con;
