const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            filename="./index.html"
            break;
        case "/contact":
            filename="./contact.html"
            break;
        case "/about":
            filename="./about.html"
            break;
        default:
            filename="./404.html"
    }
    fs.readFile(filename,"utf-8",(err,data)=>{
        if(err){
            res.end(err)
        }else{
            res.end(data)
        }
    })
})

server.listen(5000)