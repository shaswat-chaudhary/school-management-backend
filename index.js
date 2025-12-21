const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

//Routes
const schoolRouter = require('./routes/schoolRouter')

app.use('/api', schoolRouter);

const PORT = process.env.DB_PORT || 5000;

app.get('/', (req, res) => {
    res.send(`School Management API Running on port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})