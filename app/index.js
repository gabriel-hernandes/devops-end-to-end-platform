const express = require ('express');
const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || '1.0.0';

app.get('/health', (req, res) => {
    res.json({status : 'ok' });
});

app.get('/version', (req, res) => {
    res.json({versio : VERSION});
});

app.listen(PORT, () => {
    console.log('App running on port ${PORT}');
});