const con = require('../database').databaseConnection;

module.exports.getAllSuppliers = (req, res) => {
  const sql = `SELECT * FROM suppliers`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.createNewSupplier = (req, res) => {
  const sql = `
  INSERT INTO suppliers (name, kw_price)
  VALUES (?,?)
  `;
  con.query(sql, [req.body.name, req.body.priceKW], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.deleteSupplierByID = (req, res) => {
  const sql = `
  DELETE FROM suppliers
  WHERE id=?
  `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.updateSupplierByID = (req, res) => {
  const sql = `
  UPDATE suppliers
  SET name=?, kw_price=?
  WHERE id=?
  `;
  con.query(sql, [req.body.name, req.body.priceKW, req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
