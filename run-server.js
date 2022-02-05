const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("server online");
});

app.get('/user', (req, res) => {
    res.send({adddress:"foobar"});
});


app.listen(3000, () => console.log('Example app is listening on port 3000.'));