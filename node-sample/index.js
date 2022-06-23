const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde ' + process.env.APP_NAME || '(sin nombre)');
});
app.get('/ping', (req, res) => {
    res.json({ msg: 'pong' });
});

app.get('/version', (req, res) => {
    res.send('3.0');
    console.log('Version 3.0');
});
app.get('/time', (req, res) => {
    const ts = new Date().toISOString();
    res.json({
        ts
    });
    console.log('Hora ' + ts);
});

const port = +process.env.PORT || 9099;

app.listen(port, () => {
    console.log('Corriendo en el puerto ' + port);
});