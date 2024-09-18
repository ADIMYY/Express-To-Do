const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const taskRoute = require(`${__dirname}/routes/taskRoute`)

dotenv.config({ path: `${__dirname}/convig.env` });

const app = express();
const port = 3000;

//! middleware
app.use(express.json());

//! DB conection
const DB = process.env.DATABASE.replace(
    '<db_password>', 
    process.env.PASSWORD
);

mongoose
    .connect(DB)
    .then(() => console.log('DB connection established'));

app.use('/', taskRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
}); 