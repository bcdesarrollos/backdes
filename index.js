// import express from "express";
require("dotenv").config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const app = express();
// const port = 9000;
const port = process.env.PORT || 3001;
app.use("/", (req,res) => {
    res.json({ message: "Hello From Express app"})
})

// app.listen(9000, ()=>{
//     console.log(`Starting Server on Port ${port}`)
// })
conn.sync({ force: false }).then(() => {
    server.listen(port, () => {
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  });