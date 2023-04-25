const express=require("express")
const mongoose=require("mongoose")
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

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/adduser",(req,res)=>{
    res.render("add.ejs")
})
app.get("/showuser",async(req,res)=>{
    var ansDB=await userModel.find();
    res.render("Show.ejs" , {userRecord:ansDB})
})
app.post("/userAction", async(req,res)=>{
    // res.send("route tested")
    // console.log(req.body)
    const instance = new userModel(req.body);
    var ans = await instance.save()
    res.redirect("/showuser")
    
})
app.listen(5000)
