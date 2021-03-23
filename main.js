const express = require("express")
const http = require('http')
const app = express()

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/index.html")
})


app.listen(5000, () => {
    console.log("servidor en 5000")
})