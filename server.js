// // server.js
// const express = require('express');
// const { Pool } = require('pg');
// const { MongoClient } = require('mongodb');
// require('dotenv').config();

// const app = express();
// const port = 3000;

// app.use(express.json());

// // PostgreSQL connection
// const pool = new Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// });

// // MongoDB connection
// const mongoClient = new MongoClient(process.env.MONGO_URI);
// let mongoDB;

// mongoClient.connect(err => {
//   if (err) throw err;
//   mongoDB = mongoClient.db(process.env.MONGO_DB_NAME);
// });

// // PostgreSQL CRUD operations
// app.get('/pg-data', async (req, res) => {
//   const result = await pool.query('SELECT * FROM your_table');
//   res.json(result.rows);
// });

// app.post('/pg-data', async (req, res) => {
//   const { name } = req.body;
//   await pool.query('INSERT INTO your_table (name) VALUES ($1)', [name]);
//   res.status(201).send('Data inserted');
// });

// app.put('/pg-data/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   await pool.query('UPDATE your_table SET name = $1 WHERE id = $2', [name, id]);
//   res.send('Data updated');
// });

// app.delete('/pg-data/:id', async (req, res) => {
//   const { id } = req.params;
//   await pool.query('DELETE FROM your_table WHERE id = $1', [id]);
//   res.send('Data deleted');
// });

// // MongoDB CRUD operations
// app.get('/mongo-data', async (req, res) => {
//   const data = await mongoDB.collection('your_collection').find().toArray();
//   res.json(data);
// });

// app.post('/mongo-data', async (req, res) => {
//   const { name } = req.body;
//   await mongoDB.collection('your_collection').insertOne({ name });
//   res.status(201).send('Data inserted');
// });

// app.put('/mongo-data/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   await mongoDB.collection('your_collection').updateOne({ _id: new require('mongodb').ObjectId(id) }, { $set: { name } });
//   res.send('Data updated');
// });

// app.delete('/mongo-data/:id', async (req, res) => {
//   const { id } = req.params;
//   await mongoDB.collection('your_collection').deleteOne({ _id: new require('mongodb').ObjectId(id) });
//   res.send('Data deleted');
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const express = require('express')
const app = express();
const port = 9000;
const bodyParser = require('body-parser');
const { Pool } = require("pg");

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/submit', function (req, res) {
    console.log("Data saved");
});

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "000555",
    database: "Web"
});

app.post("/", (req, res) => {
    const { name, email, message} = req.body;
    pool.query('INSERT INTO public."InfoWeb" VALUES ($1,$2,$3)', [name, email, message], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
        } else {
            console.log('Insert successful', result);
        }
        res.sendFile(__dirname + "/index.html");
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});