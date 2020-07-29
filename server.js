const express = require("express");
const app = express();
const everyThird = require("./middleware/everyThird.js");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(3000);

app.post("/test", everyThird, (req, res) => {
    res.send(req.body)
})