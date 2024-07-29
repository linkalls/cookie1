const express = require("express")
const app = express()

app.get("/greet",(req,res)=>{
  res.send("やっほ")
})

app.get("/setname",(req,res)=>{
  res.cookie("name","yamada") //* responseも返さないと
  res.send("cookieをおくったよ")
})

app.listen(3000,()=>{
  console.log("実行したよ")
})