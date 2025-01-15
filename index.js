const express = require("express")
const {handler} = require("./controllers/index")
const app = express();

app.use(express.json());

app.get("/",async(req,res)=>{
    res.end("<h1>Tele Bot From Hit Dhameliya</h1>")
});

app.post("*",async(req,res)=>{
    console.log(req.body);
    res.send(await handler(req))
});

app.listen(8080,(e)=>{
    if (e) throw e
    console.log("Server is Running on 8080")
})