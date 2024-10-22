const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const taskRoute = require(`${__dirname}/routes/taskRoute`);
const userRoute = require(`${__dirname}/routes/userRoute`);

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


//! Mounting
app.use('/api/task', taskRoute);
app.use('/api/user', userRoute);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
