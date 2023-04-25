const http=require("http")
// console.log(http)

const server=http.createServer((req,res)=>{
    console.log(typeof req)
    console.log(typeof res)
    res.end("Server Satrted")
})

// port number 1-65535 
// port number 1-1024 

//localhost:5000 => for start your server
//127.0.0.1:5000 => for start your server
server.listen(5000)