const express = require("express")
const productsRouter = require("./routes/products.routes")
const cartsRouter = require("./routes/carts.routes")

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended : true}))//recibir parametros por url

app.use("/",productsRouter)
app.use("/",cartsRouter)

app.listen(PORT,()=>console.log("escuchando el puerto 8080"))
