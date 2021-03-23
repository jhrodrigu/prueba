const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));


app.post('/enviar', (req, res) => {
    console.log(req.body);
    res.send('recibido');
})


app.listen(5000, () => {
    console.log("servidor en 5000")
})