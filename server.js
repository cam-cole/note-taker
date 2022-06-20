const express = require('express');
const { notes } = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Listening now on port ${PORT}!`);
})
