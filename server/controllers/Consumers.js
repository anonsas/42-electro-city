const con = require('../database').databaseConnection;

module.exports.getAllConsumers = (req, res) => {
  const sql = `SELECT * FROM consumers`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.createNewConsumer = (req, res) => {
  const sql = `
  INSERT INTO consumers (name, surname, electricity_number, supplier_id)
  VALUES (?,?,?,?)
  `;
  con.query(
    sql,
    [req.body.name, req.body.surname, req.body.electricityNum, req.body.supplier],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};

module.exports.deleteConsumerByID = (req, res) => {
  const sql = `
  DELETE FROM consumers
  WHERE id=?
  `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.updateConsumerByID = (req, res) => {
  const sql = `
  UPDATE consumers
  SET name=?, surname=?, electricity_number=?, supplier_id=?
  WHERE id=?
  `;
  con.query(
    sql,
    [
      req.body.name,
      req.body.surname,
      req.body.electricityNum,
      req.body.supplier,
      req.params.id,
    ],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
};
