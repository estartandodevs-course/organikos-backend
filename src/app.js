/* eslint-disable no-undef */
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (require, response) => {
    response.send('organikos');
});

app.listen(PORT, () => {
    console.log('Servidor is running');
});
