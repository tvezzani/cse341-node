const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Always runs');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('User middleware');
    res.send('<h1>This is the user page</h1>');
});

app.use((req, res, next) => {
    console.log('Main middleware');
    res.send('<h1>This is the main page</h1>');
});

app.listen(3000);