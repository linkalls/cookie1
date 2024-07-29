const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser("mysecret")) //* ミドルウェアで全部のリクエスト 秘密鍵にmysecretを渡してる

app.get("/greet", (req, res) => {
  console.log(req.cookies) //* { name: 'yamada', animal: 'cat' }
  const { name = "anonymous" } = req.cookies
  res.send(`やっほ- ${name}`)
})

app.get("/setname", (req, res) => {
  res.cookie("name", "yamada") //* responseも返さないと
  res.cookie("animal", "cat") //* 複数かけるよ
  res.send("cookieをおくったよ")
})

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true }) //* 署名付き
  res.send("署名付きcookie返したよ") //* fruit: s%3Agrape.iAFRE8iCRHWXRV8ttPvGw91hOZJMYJ5lSGfOMSmBiYo
  //* 署名付きcookieは隠すためじゃない
})

app.get("/verifyfruit", (req, res) => {
  console.log(req.cookies)
  // res.send(req.cookies)
  // {
  // "animal": "cat",
  // "color": "perpul",
  // "name": "manko"
  // }
  res.send(req.signedCookies)
  // {
  //   "fruit": "grape"
  //   }
})

app.listen(3000, () => {
  console.log("実行したよ")
})
