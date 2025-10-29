const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('res test')
});

app.listen(3015, () => {
    console.log('Server is running!')
});