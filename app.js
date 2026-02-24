const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!!!' });
});

app.get('/soma/:a/:b', (req, res) => {
    const a = Number.parseInt(req.params.a);
    const b = Number.parseInt(req.params.b);

    res.json({ resultado: a + b });
});

app.get('/divisao/:a/:b', (req, res) => {
    const a = Number.parseInt(req.params.a);
    const b = Number.parseInt(req.params.b);

    if (b === 0) {
        return res.status(400).json({ error: "Divisão por zero não permitida" });
    }

    res.json({ resultado: a / b });
});

module.exports = app;
