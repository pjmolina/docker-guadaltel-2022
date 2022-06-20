const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola');
});
app.get('/version', (req, res) => {
    res.send('1.0');
});
app.get('/time', (req, res) => {
    res.json({
        ts: new Date().toISOString()
    });
});

app.listen(9099, () => {
    console.log('Corriendo en el pueerto 9099');
});