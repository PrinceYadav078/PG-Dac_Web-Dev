const { log } = require("console")
const fs=require("fs")
// console.log(fs)
console.log(1)
console.log(2)
fs.readFile("./home.html","utf-8",(err,data)=>{
    if(!err){
        console.log(data);
    }else{
        console.log(err);
    }
})
console.log(3)

fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log(err)
    }
})
