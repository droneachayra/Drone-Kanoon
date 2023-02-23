//console.log("hello mongodb");
const express=require('express');

const app=express();

const port=process.env.port || 8080 //this is used for server port z

const mongoose=require('mongoose');

const authRoute=require('./routes/auth-route');

const bodyParser = require('body-parser');
const cors=require('cors');
mongoose.connect('mongodb+srv://utkrisht:123@cluster0.poczyyq.mongodb.net/db?retryWrites=true&w=majority',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database is connected")
    }
}); 
mongoose.set('strictQuery', true);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cors())
app.use('/auth',authRoute);

app.get('/',(req,res) => {
    res.send('welcome to hSVPGis .... ')
})
app.listen(port,()=>{
console.log("Node server is connected..",port)
})