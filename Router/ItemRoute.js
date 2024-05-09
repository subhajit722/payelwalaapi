// ItemRoute.js
import express from 'express';
import { postItem,  getItems, deleteItem } from '../Contex/ItemContex.js';

const router = express.Router();

router.post('/', postItem);
router.get('/get', getItems);

router.delete('/:itemid', deleteItem);

export default router;
