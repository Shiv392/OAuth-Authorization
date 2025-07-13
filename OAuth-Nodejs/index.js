const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const port = 8800;


app.use(body_parser.json());
app.use(cors());

app.get('/',(req,res)=>{
    return res.send(`<h1>This is Home Route`);
})

app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
})