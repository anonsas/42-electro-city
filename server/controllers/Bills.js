const con = require('../database').databaseConnection;

module.exports.getAllBills = (req, res) => {
  const sql = `SELECT bills.*, cons.name, cons.surname, sup.name AS supName, sup.id AS supID
              FROM bills
              INNER JOIN consumers AS cons
              ON bills.consumer_id = cons.id
              INNER JOIN suppliers AS sup
              ON cons.supplier_id = sup.id`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.createNewBill = (req, res) => {
  const sql = `
  INSERT INTO bills (invoice, kwh, total, consumer_id)
  VALUES (?,?,?,?)
  `;
  con.query(
    sql,
    [req.body.invoice, req.body.kwh, req.body.total, req.body.consumer_id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};

module.exports.deleteBillByID = (req, res) => {
  const sql = `
  DELETE FROM bills
  WHERE id=?
  `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
