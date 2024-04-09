const express = require('express');
const mongoose = require('mongoose');
const app = express();
const todoRoutes = require('./routes/todoRoute')
const dbConnect = require('./config/database')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
dbConnect(); 

app.use(express.json())

app.use('/api/v1', todoRoutes);

app.get('/', (req, res) => {
    res.send('<h1>This is homepage</h1>');
})