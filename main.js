const express = require("express")
const app = express()

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/index.html")
})


app.get('/datos', (req, res) => {
    console.log(req.body);
    res.send('recivido');
})


app.listen(5000, () => {
    console.log("servidor en 5000")
})