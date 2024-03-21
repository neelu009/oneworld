// console.log ("welcome");

require("dotenv").config();
const express =require("express");
const app = express();
const router = require("./routes/router")
const cors = require("cors")

const port = 8002;

app.use(express.json());
app.use(cors());
app.use(router);
app.use('/public',express.static('public'));

// app.get("/",(req,res) =>{
//     res.send("server start")
// })

app.listen(port,() =>{
    console.log (`server start at port no : ${port}`)
})