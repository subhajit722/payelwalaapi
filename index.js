

import express from 'express';
import cors from 'cors';
import Item from './Router/ItemRoute.js'
import Card from './Router/CardRoute.js'
import buynow from './Router/OderlistRoute.js'

// import User from './Router/UserRouter.js'



const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: ["http://localhost:3000", "http://192.168.31.67:3000" , "http://192.168.1.12:3000"], 
    
}));

app.use(express.json({ limit: '50mb' }));
app.use('/api/item' , Item)
app.use('/api/card',Card)
app.use ('/api/oder',buynow)





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
