/* eslint-disable no-undef */
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const db = require('./repositories/migrations/connection');

const User = require('./repositories/migrations/create-Table-Users');

app.get('/', (require, response) => {
    response.send('organikos');
});

app.listen(PORT, () => {
    console.log('Servidor is running');
});
