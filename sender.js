const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    console.log(req.query);
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`App Listening at localhost:${port}`);
})


//ngrok http 3000