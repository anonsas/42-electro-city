const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// DATABASE CONNECTION================
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'electricity_suppliers',
});
//===================================

// ROUTES ===========================
app.get('/consumers', (req, res) => {
  const sql = `
  SELECT * FROM consumers
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//===================================
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
