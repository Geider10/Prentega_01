const express = require("express")
const productsRouter = require("./routes/products.router")

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended : true}))//recibir parametros por url

app.use("/",productsRouter)
app.listen(PORT,()=>console.log("escuchando el puerto 8080"))
