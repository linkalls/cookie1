const express = require("express")
const app = express()

app.get("/greet",(req,res)=>{
  res.send("やっほ")
})

app.listen(3000,()=>{
  console.log("実行したよ")
})