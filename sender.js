const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const local_token = "123456"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{
    console.log(req.query);
    const challenge = req.query['hub.challenge'];
    const verify_token = req.query['hub.verify_token'];
    if (local_token===verify_token) {
        res.send(challenge);
    }else {
        res.send("Hello World");
    }
})
app.post('/',(req,res)=>{
    console.log(JSON.stringify(req.body));
    res.send("OK You are cool!!");
})

app.listen(port,()=>{
    console.log(`App Listening at localhost:${port}`);
})


//ngrok http 3000