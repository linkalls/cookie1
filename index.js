const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser()) //* ミドルウェアで全部のリクエスト

app.get("/greet",(req,res)=>{
console.log(req.cookies) //* { name: 'yamada', animal: 'cat' }
const {name="anonymous"} = req.cookies
  res.send(`やっほ- ${name}`)
})

app.get("/setname",(req,res)=>{
  res.cookie("name","yamada") //* responseも返さないと
  res.cookie("animal","cat") //* 複数かけるよ
  res.send("cookieをおくったよ")
})

app.listen(3000,()=>{
  console.log("実行したよ")
})