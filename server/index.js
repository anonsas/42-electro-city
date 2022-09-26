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
//suppliers
app.get('/suppliers', (req, res) => {
  const sql = `
  SELECT * FROM suppliers
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/suppliers', (req, res) => {
  const sql = `
  INSERT INTO suppliers (name, kw_price)
  VALUES (?,?)
  `;
  con.query(sql, [req.body.name, req.body.priceKW], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/suppliers/:id', (req, res) => {
  const sql = `
  DELETE FROM suppliers
  WHERE id=?
  `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//===================
//consumers
app.get('/consumers', (req, res) => {
  const sql = `
  SELECT * FROM consumers
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/consumers', (req, res) => {
  const sql = `
  INSERT INTO consumers (name, surname, electricity_number)
  VALUES (?,?,?)
  `;
  con.query(
    sql,
    [req.body.name, req.body.surname, req.body.electricityNum],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

//===================================
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
