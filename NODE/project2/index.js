const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors')

//CORS=> CROSS-ORIGIN RESOURCE SHARING 

// console.log(typeof express)
// console.log(12346)
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/cdac')
.then(() => console.log('Connected!'));
  
const Schema = mongoose.Schema;
const userSchema=new Schema({
    F_name:String,
    L_name:String,
    email:String,
    password:String,
    mobile:Number,
    address:String,
    city:String,
    state:String,
    zip:Number
})

const userModel = mongoose.model('users', userSchema );

const app=express()
app.set("view engine","ejs")
app.use(cors())
app.use(bodyParser.json())  // this is for react
// app.use(bodyParser.urlencoded({ extended: true }))  // this is foe ejs

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/adduser",(req,res)=>{
    res.render("add.ejs")
})
app.get("/showuser",async(req,res)=>{
    var ansDB=await userModel.find();
    // res.render("Show.ejs" , {userRecord:ansDB})
    res.send(ansDB)
})
app.post("/userAction", async(req,res)=>{    // this is for ejs 
    // res.send("route tested")
    // console.log(req.body)
    const instance = new userModel(req.body);
    var ans_insert = await instance.save()
    res.send({mssg:"Data Added Successfully in DataBase"})
    // res.redirect("/showuser")
    
    
})

app.post("/insert_data",async(req,res)=>{   // this is for react
    const instance=new userModel(req.body);
    var ans = await instance.save()
})
app.listen(5000)
