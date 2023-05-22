import express from "express";
const { conn } = require('./src/db.js');

const app = express();
const port = 9000;
app.use("/", (req,res) => {
    res.json({ message: "Hello From Express app"})
})

app.listen(9000, ()=>{
    console.log(`Starting Server on Port ${port}`)
})