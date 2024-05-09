// ItemContex.js
import db from '../connect.js';

export const postItem = (req, res) => {
  const { itempost, itemname, price, dec } = req.body;

  const insertQuery = 'INSERT INTO item (itempost, itemname, price, `dec`) VALUES (?, ?, ?, ?)';
  const values = [itempost, itemname, price, dec];

  db.query(insertQuery, values, (err) => {
    if (err) {
      console.error('Error creating item:', err);
      return res.status(500).json({ error: 'Failed to create item', details: err.message });
    }
    return res.status(200).json({ message: 'Item created successfully', item: req.body });
  });
};



export const getItems = async (req, res) => {


  try {
    const selectQuery = 'SELECT * FROM item';
    db.query(selectQuery, (err, results) => {
      if (err) {
        console.error('Error fetching items:', err);
        return res.status(500).json({ error: 'Failed to fetch items', details: err.message });
      }
      
      if (!Array.isArray(results)) {
        throw new Error('Invalid result format from database query');
      }
     
      return res.status(200).json({ items: results });
      
    });
  } catch (err) {
    console.error('Error fetching items:', err);
    return res.status(500).json({ error: 'Failed to fetch items', details: err.message });
  }
};


export const deleteItem = (req, res) => {
  const { itemid } = req.params;

  const deleteQuery = 'DELETE FROM item WHERE itemid = ?';

  db.query(deleteQuery, [itemid], (err) => {
    if (err) {
      console.error('Error deleting item:', err);
      return res.status(500).json({ error: 'Failed to delete item', details: err.message });
    }
    return res.status(200).json({ message: 'Item deleted successfully' });
  });
};
