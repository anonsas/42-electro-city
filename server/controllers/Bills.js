const con = require('../database').databaseConnection;

module.exports.getAllBills = (req, res) => {
  const sql = `SELECT bills.*, consumers.name, consumers.surname, suppliers.name as supName
              FROM bills
              INNER JOIN consumers
              ON bills.consumer_id = consumers.id
              INNER JOIN suppliers
              ON consumers.supplier_id = suppliers.id`;
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
