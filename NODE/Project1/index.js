// console.log(12345678)
// console.log("I am a developer")

const express = require("express");
// console.log(typeof express)
const app = express();
const port = 5000;
app.set("view engine","ejs")

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World!</h1>");
// });
// app.get("/products", (req, res) => {
//   res.send({ Tshirts: "medium" });
// });

// app.get("/users", (req, res) => {
//   res.send(["prince","yadav"]);
// });

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/product",(req,res)=>{
    res.render("product.ejs")
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})
app.get("/signup",(req,res)=>{
    res.render("signup.ejs")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
