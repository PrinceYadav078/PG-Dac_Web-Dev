const http=require("http")
const fs=require("fs")

const server= http.createServer((req,res)=>{
    fs.readFile("./home.html","utf-8",(err,data)=>{
        if(err){
            res.end(err)
        }else{
            res.end(data)
        }
    })
    fs.readFile("./file.txt","utf-8",(err,data)=>{
        if(err){
            res.end(err)
        }else{
            res.end(data)
        }
    })

})
server.listen(5000)