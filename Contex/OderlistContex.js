import db from '../connect.js';

export const postProduct = (req, res) => {
    const { status, img, productname, quantity, price, userid } = req.body;
  
    const insertQuery = 'INSERT INTO oderlist (status, img, productname, quantity, price, userid) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [status, img, productname, quantity, price, userid];
  
    db.query(insertQuery, values, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else {
        return res.status(200).json({ message: 'Product created successfully', product: req.body });
      }
    });
};

export const getProduct = (req, res) => {
  const selectQuery = 'SELECT * FROM oderlist';

  db.query(selectQuery, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ products: results });
    }
  });
};

export const deleteProduct = (req, res) => {
  const { productid } = req.params;

  const deleteQuery = 'DELETE FROM oderlist WHERE productid = ?';

  db.query(deleteQuery, [productid], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ message: 'Product deleted successfully' });
    }
  });
};

export const updateProduct = (req, res) => {
  const { productid } = req.params;
  const { status } = req.body;

  const updateQuery = 'UPDATE oderlist SET status=? WHERE productid=?';
  const values = [status, productid];

  db.query(updateQuery, values, (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      } else {
          return res.status(200).json({ message: 'Order status updated successfully' });
      }
  });
};
